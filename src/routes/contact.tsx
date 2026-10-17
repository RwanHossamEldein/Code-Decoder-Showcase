import { createFileRoute, redirect } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/WebsiteSections";


export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "Contact & Feedback — CodeDecoder" },
    { name: "description", content: "Questions, bugs or ideas? Contact the CodeDecoder team." },
    { property: "og:title", content: "Contact & Feedback — CodeDecoder" },
    { property: "og:description", content: "Questions, bugs or ideas? Contact the CodeDecoder team." },
  ] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "contact" }); },
  component: Page,
});

function Page() {
  return <ContactSection />;
}
