-- Run this in Supabase -> SQL Editor on the new project.
-- Only the server (service role key, used by /api/contact) can write. No public access.
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  org text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- Intentionally no policies: anon/authenticated users get no access; service_role bypasses RLS.
