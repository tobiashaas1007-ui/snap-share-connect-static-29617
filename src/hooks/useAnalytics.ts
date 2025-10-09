import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

export type AnalyticsEventType = 
  | 'page_view' 
  | 'app_store_click' 
  | 'play_store_click' 
  | 'waitlist_signup';

export const useAnalytics = () => {
  // Track page view on mount
  useEffect(() => {
    trackEvent('page_view', { url: window.location.pathname });
  }, []);

  const trackEvent = async (eventType: AnalyticsEventType, metadata?: Record<string, any>) => {
    try {
      await supabase
        .from('analytics_events')
        .insert({
          event_type: eventType,
          metadata: metadata || {}
        });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackDownloadClick = (store: 'app_store' | 'play_store') => {
    const eventType = store === 'app_store' ? 'app_store_click' : 'play_store_click';
    trackEvent(eventType, { store });
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

  return { trackEvent, trackDownloadClick, joinWaitlist };
};
