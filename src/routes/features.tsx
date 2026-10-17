import { createFileRoute } from "@tanstack/react-router";
import { FeaturesSection } from "@/components/site/WebsiteSections";


export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "Features — CodeDecoder" },
    { name: "description", content: "AI code explanations, visualization, debugging and complexity analysis." },
    { property: "og:title", content: "Features — CodeDecoder" },
    { property: "og:description", content: "AI code explanations, visualization, debugging and complexity analysis." },
  ] }),
  component: Page,
});

function Page() {
  return <FeaturesSection />;
}
