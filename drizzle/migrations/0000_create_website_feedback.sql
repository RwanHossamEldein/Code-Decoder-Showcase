CREATE TABLE public.website_feedback (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 type text NOT NULL CHECK (type IN ('inquiry','feedback','bug','feature','collaboration')),
 subject text NOT NULL CHECK (char_length(subject) BETWEEN 1 AND 150),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 5000),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.website_feedback TO anon, authenticated;
GRANT ALL ON public.website_feedback TO service_role;
ALTER TABLE public.website_feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors submit feedback only" ON public.website_feedback FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX website_feedback_email_created ON public.website_feedback (email, created_at);
CREATE FUNCTION public.limit_feedback_submissions() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(lower(NEW.email)));
 IF EXISTS (SELECT 1 FROM public.website_feedback WHERE lower(email) = lower(NEW.email) AND created_at > now() - interval '1 minute') THEN
 RAISE EXCEPTION 'Please wait before submitting another message';
 END IF;
 RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.limit_feedback_submissions() FROM PUBLIC;
CREATE TRIGGER limit_feedback BEFORE INSERT ON public.website_feedback FOR EACH ROW EXECUTE FUNCTION public.limit_feedback_submissions();