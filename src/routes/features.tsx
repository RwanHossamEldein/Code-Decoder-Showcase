import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { title: "Features — CodeDecoder" },
    { name: "description", content: "AI code explanations, visualization, debugging and complexity analysis." },
    { property: "og:title", content: "Features — CodeDecoder" },
    { property: "og:description", content: "AI code explanations, visualization, debugging and complexity analysis." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHero kicker={t.features.kicker} title={t.features.title} desc={t.features.desc} />;
}
