import { useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, feedbackTypes } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/contact.functions";
import { useI18n } from "@/lib/i18n";

export function FeedbackForm() {
  const { t, lang } = useI18n();
  const send = useServerFn(sendContactMessage);
  const started = useRef(Date.now());
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse({ ...fields, elapsedMs: Date.now() - started.current });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0]);
        next[field] = t.contact.errors[field as keyof typeof t.contact.errors] ?? (lang === "ar" ? "راجع البيانات وحاول مرة أخرى." : "Check your entries and try again.");
      }
      setErrors(next); return;
    }
    setBusy(true); setErrors({});
    try {
      const result = await send({ data: parsed.data });
      if (result.ok) { setSuccess(true); form.reset(); }
      else setErrors({ form: lang === "ar" ? "تعذّر الإرسال. انتظر دقيقة وحاول مرة أخرى؛ بياناتك محفوظة في النموذج." : "Unable to send. Wait a minute and try again; your entries are still here." });
    } catch {
      setErrors({ form: lang === "ar" ? "تعذّر الإرسال الآن. حاول مرة أخرى." : "Unable to send right now. Please try again." });
    } finally { setBusy(false); }
  }
  if (success) return <div role="status" className="py-16 text-center"><CheckCircle2 className="mx-auto size-12 text-primary" /><h3 className="mt-5 text-2xl font-semibold">{lang === "ar" ? "شكرًا لمشاركتنا رأيك!" : "Thanks for sharing your thoughts!"}</h3><p className="mt-3 text-muted-foreground">{lang === "ar" ? "وصلت رسالتك لفريق CodeDecoder." : "Your message has been received by CodeDecoder."}</p><Button variant="outline" className="mt-6" onClick={() => { setSuccess(false); started.current = Date.now(); }}>{lang === "ar" ? "إرسال رسالة أخرى" : "Send another message"}</Button></div>;
  const inputClass = "mt-2 h-12 bg-background";
  return <form onSubmit={submit} noValidate className="space-y-5">
    <div className="grid gap-5 sm:grid-cols-2">
      {([['name', t.contact.name, 100], ['email', t.contact.email, 255]] as const).map(([name, label, max]) => <div key={name}><label htmlFor={`feedback-${name}`} className="text-sm font-medium">{label} <span className="text-primary">*</span></label><Input id={`feedback-${name}`} name={name} type={name === 'email' ? 'email' : 'text'} autoComplete={name} maxLength={max} required aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} className={inputClass} />{errors[name] && <p id={`${name}-error`} className="mt-2 text-sm text-destructive">{errors[name]}</p>}</div>)}
    </div>
    <div><label htmlFor="feedback-type" className="text-sm font-medium">{t.contact.type} <span className="text-primary">*</span></label><select id="feedback-type" name="type" defaultValue="" required aria-invalid={Boolean(errors.type)} className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-sm"><option value="" disabled>{t.contact.select}</option>{feedbackTypes.map((value, i) => <option key={value} value={value}>{t.contact.types[i]}</option>)}</select>{errors.type && <p className="mt-2 text-sm text-destructive">{errors.type}</p>}</div>
    <div><label htmlFor="feedback-subject" className="text-sm font-medium">{t.contact.subject} <span className="text-primary">*</span></label><Input id="feedback-subject" name="subject" maxLength={150} required className={inputClass} aria-invalid={Boolean(errors.subject)} />{errors.subject && <p className="mt-2 text-sm text-destructive">{errors.subject}</p>}</div>
    <div><label htmlFor="feedback-message" className="text-sm font-medium">{t.contact.message} <span className="text-primary">*</span></label><Textarea id="feedback-message" name="message" minLength={10} maxLength={5000} rows={5} required className="mt-2 resize-y bg-background" aria-invalid={Boolean(errors.message)} />{errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}</div>
    <div className="hidden" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
    {(errors.form || errors.elapsedMs) && <p role="alert" className="text-sm text-destructive">{errors.form || errors.elapsedMs}</p>}
    <Button type="submit" size="lg" disabled={busy} className="h-12 w-full sm:w-auto">{busy ? <Loader2 className="animate-spin" /> : <Send />}{busy ? t.contact.sending : t.contact.send}</Button>
    <p className="max-w-lg text-xs leading-relaxed text-muted-foreground">{t.contact.privacy}</p>
  </form>;
}