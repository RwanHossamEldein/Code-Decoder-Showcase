import { createFileRoute } from "@tanstack/react-router";
import { Cover, IntroSection, FeaturesSection, HowSection, ShowcaseSection, AboutSection, ContactSection } from "@/components/site/WebsiteSections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "CodeDecoder — Understand Code. Visualize Logic." },
    { name: "description", content: "AI code explanation, code visualization, debugging and complexity analysis in English and Arabic." },
    { property: "og:title", content: "CodeDecoder — Understand Code. Visualize Logic." },
    { property: "og:description", content: "AI code explanation, visualization and debugging." },
  ] }),
  component: Index,
});

function Index() {
  return <><Cover /><IntroSection /><FeaturesSection /><HowSection /><ShowcaseSection /><AboutSection /><ContactSection /></>;
}
