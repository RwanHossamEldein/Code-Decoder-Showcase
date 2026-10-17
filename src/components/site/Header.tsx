import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { markUrl } from "@/lib/shots";

export function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="CodeDecoder home">
      <img src={markUrl} alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
      <span className="font-display text-lg font-bold" dir="ltr">Code<span className="text-primary">Decoder</span></span>
    </Link>
  );
}

export function Header() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "home", label: t.nav.home },
    { to: "features", label: t.nav.features },
    { to: "showcase", label: t.nav.showcase },
    { to: "about", label: t.nav.about },
    { to: "contact", label: t.nav.contact },
  ] as const;
  const cls = "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-3 data-[status=active]:after:-bottom-px data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-primary";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.to} href={`/#${l.to}`} className={cls}>{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={toggle} className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border px-3 text-sm text-muted-foreground transition-colors hover:text-foreground" aria-label="Switch language">
            <Languages className="h-4 w-4" /> <span>{t.nav.lang}</span>
          </Button>
          <Button asChild className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"><a href="/#features">{t.nav.cta}</a></Button>
          <Button variant="outline" size="icon" onClick={() => setOpen((o) => !o)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden" aria-label={t.nav.menu} aria-expanded={open} aria-controls="mobile-nav">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a key={l.to} href={`/#${l.to}`} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary">{l.label}</a>
            ))}
            <a href="/#features" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-semibold text-primary-foreground">{t.nav.cta}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
