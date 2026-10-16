import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Shot } from "@/components/site/ui";
import { shots } from "@/lib/shots";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "CodeDecoder — Understand Code. Visualize Logic." },
    { name: "description", content: "AI code explanation, code visualization, debugging and complexity analysis in English and Arabic." },
    { property: "og:title", content: "CodeDecoder — Understand Code. Visualize Logic." },
    { property: "og:description", content: "AI code explanation, visualization and debugging." },
  ] }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <div className="bg-hero absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">{t.hero.title1} <span className="text-gradient">{t.hero.title2}</span> {t.hero.title3}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{t.hero.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/showcase" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-glow">{t.hero.primary}</Link>
            <Link to="/features" className="rounded-lg border px-5 py-3 font-semibold">{t.hero.secondary}</Link>
          </div>
          <Link to="/contact" className="mt-5 inline-block text-sm text-muted-foreground hover:text-primary">{t.hero.contact}</Link>
        </div>
        <Shot src={shots.editor} alt="CodeDecoder code editor screen" eager className="mx-auto w-full max-w-xs animate-float" />
      </div>
    </section>
  );
}
