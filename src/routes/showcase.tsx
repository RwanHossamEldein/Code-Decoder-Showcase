import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/showcase")({
  head: () => ({ meta: [
    { title: "Showcase — CodeDecoder" },
    { name: "description", content: "Real screens from the CodeDecoder app." },
    { property: "og:title", content: "Showcase — CodeDecoder" },
    { property: "og:description", content: "Real screens from the CodeDecoder app." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHero kicker={t.showcase.kicker} title={t.showcase.title} desc={t.showcase.desc} />;
}
