import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/contact";

const TITLE = "So'rovnoma — Sell Soft";
const DESC =
  "Qisqa so'rovnomani to'ldiring — mebel do'koningiz uchun 7 kunlik katalog rejasi va aniq taklif bilan bog'lanamiz.";

export const Route = createFileRoute("/ariza")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ariza" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ariza" }],
  }),
  component: ArizaPage,
});

function ArizaPage() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <main>
        <ContactSection />
      </main>
    </div>
  );
}
