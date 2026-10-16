import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — CodeDecoder" },
    { name: "description", content: "Why CodeDecoder exists and the principles behind it." },
    { property: "og:title", content: "About — CodeDecoder" },
    { property: "og:description", content: "Why CodeDecoder exists and the principles behind it." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHero kicker={t.about.kicker} title={t.about.title} desc={t.about.desc} />;
}
