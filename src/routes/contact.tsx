import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact & Feedback — CodeDecoder" },
    { name: "description", content: "Questions, bugs or ideas? Contact the CodeDecoder team." },
    { property: "og:title", content: "Contact & Feedback — CodeDecoder" },
    { property: "og:description", content: "Questions, bugs or ideas? Contact the CodeDecoder team." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHero kicker={t.contact.kicker} title={t.contact.title} desc={t.contact.desc} />;
}
