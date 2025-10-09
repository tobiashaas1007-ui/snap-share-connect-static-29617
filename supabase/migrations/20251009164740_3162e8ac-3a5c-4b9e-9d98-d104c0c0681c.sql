-- Tabelle für E-Mail Registrierungen (Fake Door Test)
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT, -- 'app_store' oder 'play_store'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabelle für Analytics Events
CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL, -- 'page_view', 'app_store_click', 'play_store_click', 'waitlist_signup'
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Policies für öffentlichen Zugriff (keine Auth notwendig)
CREATE POLICY "Anyone can insert into waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can insert analytics events"
ON public.analytics_events
FOR INSERT
WITH CHECK (true);

-- Index für bessere Performance
CREATE INDEX idx_analytics_events_type ON public.analytics_events(event_type);
CREATE INDEX idx_analytics_events_created ON public.analytics_events(created_at);
CREATE INDEX idx_waitlist_created ON public.waitlist(created_at);