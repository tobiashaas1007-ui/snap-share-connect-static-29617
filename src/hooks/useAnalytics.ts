import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

export type AnalyticsEventType = 
  | 'page_view' 
  | 'app_store_click' 
  | 'play_store_click' 
  | 'waitlist_signup'
  | 'session_start'
  | 'session_end'
  | 'button_click';

export const useAnalytics = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionId] = useState<string>(() => {
    // Generate unique session ID for anonymous users
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  });

  // Get current user ID
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.id || null);
    };
    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user?.id || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Track session start and duration
  useEffect(() => {
    const sessionStart = Date.now();
    let hasTrackedSession = false;
    
    // Only track once per session
    if (!hasTrackedSession) {
      hasTrackedSession = true;
      
      // Track combined session_start with page_view data
      trackEvent('session_start', { 
        url: window.location.pathname,
        timestamp: new Date().toISOString()
      });
    }

    // Track session end on unmount or page unload
    const handleSessionEnd = () => {
      const sessionDuration = Date.now() - sessionStart;
      trackEvent('session_end', { 
        url: window.location.pathname,
        duration_ms: sessionDuration,
        duration_seconds: Math.round(sessionDuration / 1000),
        timestamp: new Date().toISOString()
      });
    };

    window.addEventListener('beforeunload', handleSessionEnd);

    return () => {
      handleSessionEnd();
      window.removeEventListener('beforeunload', handleSessionEnd);
    };
  }, []);

  const trackEvent = async (eventType: AnalyticsEventType, metadata?: Record<string, any>) => {
    try {
      await supabase
        .from('analytics_events')
        .insert({
          event_type: eventType,
          metadata: metadata || {},
          user_id: userId,
          session_id: sessionId
        });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackDownloadClick = (store: 'app_store' | 'play_store') => {
    const eventType = store === 'app_store' ? 'app_store_click' : 'play_store_click';
    trackEvent(eventType, { 
      store,
      timestamp: new Date().toISOString()
    });
  };

  const trackButtonClick = (buttonName: string, additionalData?: Record<string, any>) => {
    trackEvent('button_click', {
      button_name: buttonName,
      timestamp: new Date().toISOString(),
      url: window.location.pathname,
      ...additionalData
    });
  };

  const joinWaitlist = async (email: string, source: string) => {
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email, source });

      if (error) throw error;

      await trackEvent('waitlist_signup', { email, source });
      return { success: true };
    } catch (error: any) {
      console.error('Waitlist signup error:', error);
      return { success: false, error: error.message };
    }
  };

  return { trackEvent, trackDownloadClick, trackButtonClick, joinWaitlist };
};
