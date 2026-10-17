import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/WebsiteSections";


export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "About — CodeDecoder" },
    { name: "description", content: "Why CodeDecoder exists and the principles behind it." },
    { property: "og:title", content: "About — CodeDecoder" },
    { property: "og:description", content: "Why CodeDecoder exists and the principles behind it." },
  ] }),
  component: Page,
});

function Page() {
  return <AboutSection />;
}
