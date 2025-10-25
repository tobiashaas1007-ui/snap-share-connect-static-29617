-- Add user_id column to analytics_events for authenticated users
ALTER TABLE public.analytics_events
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Add session_id for tracking anonymous users across page views
ALTER TABLE public.analytics_events
ADD COLUMN session_id TEXT;

-- Add index for better query performance
CREATE INDEX idx_analytics_events_user_id ON public.analytics_events(user_id);
CREATE INDEX idx_analytics_events_session_id ON public.analytics_events(session_id);