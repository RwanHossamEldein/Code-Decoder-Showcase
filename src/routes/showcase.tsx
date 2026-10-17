import { createFileRoute, redirect } from "@tanstack/react-router";
import { ShowcaseSection } from "@/components/site/WebsiteSections";


export const Route = createFileRoute("/showcase")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "Showcase — CodeDecoder" },
    { name: "description", content: "Real screens from the CodeDecoder app." },
    { property: "og:title", content: "Showcase — CodeDecoder" },
    { property: "og:description", content: "Real screens from the CodeDecoder app." },
  ] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "showcase" }); },
  component: Page,
});

function Page() {
  return <ShowcaseSection />;
}
