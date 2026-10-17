import { MessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n";
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
            <li><a href="/#home" className="hover:text-primary">{t.nav.home}</a></li>
            <li><a href="/#features" className="hover:text-primary">{t.nav.features}</a></li>
            <li><a href="/#showcase" className="hover:text-primary">{t.nav.showcase}</a></li>
            <li><a href="/#about" className="hover:text-primary">{t.nav.about}</a></li>
            <li><a href="/#contact" className="hover:text-primary">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold">{t.footer.contact}</h2>
          <a href="/#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><MessageSquare className="h-4 w-4" />{t.contact.kicker}</a>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">{t.footer.rights}</div>
    </footer>
  );
}
