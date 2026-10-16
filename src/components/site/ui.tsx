import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHead({ kicker, title, desc, center }: { kicker: string; title: string; desc?: string; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{"// "}{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
    </Reveal>
  );
}

export function PageHero({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="bg-hero absolute inset-0" aria-hidden />
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{"// "}{kicker}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{desc}</p>
      </div>
    </section>
  );
}

/** Screenshots are already framed phone mockups (1080x1920), so we just present them in a glass card at native ratio. */
export function Shot({ src, alt, className, eager, onClick }: { src: string; alt: string; className?: string; eager?: boolean; onClick?: () => void }) {
  const img = (
    <img src={src} alt={alt} width={720} height={1280} loading={eager ? "eager" : "lazy"} decoding="async"
      className="block aspect-[9/16] h-auto w-full rounded-2xl object-contain" />
  );
  return (
    <div className={cn("glass overflow-hidden rounded-3xl p-1.5", className)}>
      {onClick ? (
        <button type="button" onClick={onClick} className="block w-full cursor-zoom-in rounded-2xl transition-transform duration-300 hover:scale-[1.015]">{img}</button>
      ) : img}
    </div>
  );
}

export function BrowserFrame({ children, label = "codedecoder" }: { children: ReactNode; label?: string }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b px-4 py-3" dir="ltr">
        <span className="h-3 w-3 rounded-full bg-destructive/80" />
        <span className="h-3 w-3 rounded-full bg-primary/60" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="ms-3 rounded-md bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  );
}
