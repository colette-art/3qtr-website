-- Run in Supabase -> SQL Editor. Additive only: existing rows and the current form keep working.
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS inquiry_type text NOT NULL DEFAULT 'general',
  ADD COLUMN IF NOT EXISTS title text,
  ADD COLUMN IF NOT EXISTS city_state text,
  ADD COLUMN IF NOT EXISTS competitive_level text;
