import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Rocket, Send, Settings, Timer } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import previewShot from "@/assets/project-giometrie.png";

const TITLE = "Qanday ishlaydi — Sell Soft";
const DESC =
  "Instagram'dan kelgan mijoz qanday qilib buyurtmaga aylanishini 2 daqiqada ko'ring, keyin so'rovnomani to'ldiring.";

// YouTube havolasini shu yerga qo'ying — istalgan format bo'ladi:
// "https://www.youtube.com/watch?v=VIDEO_ID", "https://youtu.be/VIDEO_ID",
// "https://www.youtube.com/shorts/VIDEO_ID" yoki embed havolasi.
const VIDEO_URL = "https://www.youtube.com/watch?v=E9_lh2430Os";

// Mobil uchun vertikal (9:16) video havolasi. Qo'yilsa, telefonlarda shu video
// vertikal formatda ko'rsatiladi; bo'sh qolsa, mobilda ham yuqoridagi video chiqadi.
const VIDEO_URL_MOBILE = "";

function youtubeEmbedUrl(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (!match) return null;
  return `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0`;
}

const TAKEAWAYS = [
  {
    n: "01",
    icon: Send,
    t: "Instagram → Katalog",
    d: "Mijoz Instagram'da yozadi va mahsulotlarni katalog orqali o'zi ko'radi.",
  },
  {
    n: "02",
    icon: Settings,
    t: "Oson boshqaruv",
    d: "Narx, mahsulot va rasmlarni admin paneldan o'zingiz o'zgartirasiz.",
  },
  {
    n: "03",
    icon: Rocket,
    t: "7 kunda tayyor",
    d: "Tayyor katalogingiz ishga tushadi va mijozlarni qabul qilishni boshlaydi.",
  },
];

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/video" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/video" }],
  }),
  component: VideoPage,
});

function VideoPage() {
  const [playing, setPlaying] = useState<"desktop" | "mobile" | null>(null);
  const desktopEmbed = youtubeEmbedUrl(VIDEO_URL);
  const mobileEmbed = youtubeEmbedUrl(VIDEO_URL_MOBILE);
  const embedUrl = playing === "mobile" && mobileEmbed ? mobileEmbed : desktopEmbed;

  function startVideo() {
    if (!desktopEmbed && !mobileEmbed) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    setPlaying(isMobile && mobileEmbed ? "mobile" : "desktop");
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-5 pt-16 pb-24 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            2 daqiqada ko'ring
          </p>
          <h1 className="mt-4 text-center text-[30px] leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-[44px]">
            Instagram'dan kelgan mijoz qanday qilib{" "}
            <span className="text-primary">buyurtmaga aylanadi?</span>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-border shadow-lift">
            {embedUrl && playing ? (
              <iframe
                src={embedUrl}
                title="Sell Soft — katalog tizimi qanday ishlaydi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={
                  playing === "mobile" ? "mx-auto aspect-[9/16] w-full" : "aspect-video w-full"
                }
              />
            ) : (
              <button
                type="button"
                onClick={startVideo}
                disabled={!desktopEmbed && !mobileEmbed}
                aria-label={
                  desktopEmbed || mobileEmbed ? "Videoni ijro etish" : "Video tez orada joylanadi"
                }
                className="group relative block aspect-video w-full cursor-pointer disabled:cursor-default"
              >
                <img
                  src={previewShot}
                  alt="Giometrie onlayn katalogi — video preview"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 grid place-items-center bg-ink/70">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-primary shadow-lift transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-7 w-7 text-primary-foreground" />
                    </span>
                    <p className="text-sm font-semibold text-white">
                      2 daqiqalik video
                      {!desktopEmbed && !mobileEmbed && (
                        <span className="block text-xs font-medium text-white/60">
                          Tez orada joylanadi
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-14 text-center text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Videoda bilib olasiz
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {TAKEAWAYS.map(({ n, icon: Icon, t, d }, i) => (
            <Reveal key={n} delay={200 + i * 60}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-sm font-bold text-muted-foreground/50">{n}</span>
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mt-14 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Mebel biznesingizni onlayn rivojlantirishni boshlang.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              Qisqa ariza qoldiring — mutaxassisimiz siz bilan bog'lanib, loyihangizni muhokama
              qiladi.
            </p>
            <a
              href="/ariza"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Rocket className="h-4 w-4" /> Ariza qoldirish <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Timer className="h-3.5 w-3.5" /> Ariza to'ldirish atigi 2 daqiqa
            </p>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
