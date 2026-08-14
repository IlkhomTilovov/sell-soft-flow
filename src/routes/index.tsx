import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import {
  ValueStrip,
  ProblemSolution,
  Services,
  Projects,
  WhySellSoft,
  Process,
  Pricing,
} from "@/components/site/sections";
import { ContactSection, SiteFooter } from "@/components/site/contact";

const TITLE = "Sell Soft — Biznes uchun web yechimlar";
const DESC =
  "Professional web saytlar, online kataloglar, admin panellar va Telegram integratsiyalari. Sell Soft bizneslarni web orqali kuchaytiradi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sell Soft",
          description: DESC,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ValueStrip />
        <ProblemSolution />
        <Services />
        <Projects />
        <WhySellSoft />
        <Process />
        <Pricing />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
