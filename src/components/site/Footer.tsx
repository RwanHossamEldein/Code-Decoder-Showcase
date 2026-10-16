import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useI18n, SUPPORT_EMAIL } from "@/lib/i18n";
import { Logo } from "./Header";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.desc}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.line}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold">{t.footer.nav}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">{t.nav.home}</Link></li>
            <li><Link to="/features" className="hover:text-primary">{t.nav.features}</Link></li>
            <li><Link to="/showcase" className="hover:text-primary">{t.nav.showcase}</Link></li>
            <li><Link to="/about" className="hover:text-primary">{t.nav.about}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t.nav.contact}</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold">{t.footer.contact}</h2>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-4 inline-flex items-center gap-2 break-all text-sm text-muted-foreground hover:text-primary" dir="ltr">
            <Mail className="h-4 w-4 shrink-0" /> {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">{t.footer.rights}</div>
    </footer>
  );
}
