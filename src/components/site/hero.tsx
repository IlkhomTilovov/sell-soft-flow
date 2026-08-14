import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Boxes, Send } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 400));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Web yechimlar • Online katalog • Avtomatlashtirish
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-[38px] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-[56px] lg:text-[72px]">
              Biznesingizni <span className="text-primary">web orqali</span> kuchaytiramiz.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Professional web saytlar, online kataloglar va biznesingiz uchun raqamli yechimlar
              yaratamiz.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#boglanish"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Loyihani boshlash <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#ishlarimiz"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold transition-colors hover:border-foreground"
              >
                Ishlarimizni ko'rish
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240} className="relative">
          <div
            className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px]"
            style={{ transform: `translateY(${offset * -0.04}px)` }}
          >
            <div className="absolute inset-x-4 top-4 rounded-3xl border border-border bg-card p-5 shadow-lift">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-surface" />
              </div>
              <div className="mt-5 h-3 w-2/3 rounded-full bg-foreground/85" />
              <div className="mt-2.5 h-2.5 w-1/2 rounded-full bg-border" />
              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-xl border border-border p-2.5">
                    <div className="h-12 rounded-lg bg-surface" />
                    <div className="mt-2 h-1.5 w-3/4 rounded-full bg-border" />
                    <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-primary/40" />
                  </div>
                ))}
              </div>
              <div className="mt-4 h-8 w-32 rounded-full bg-primary" />
            </div>

            <div
              className="absolute right-0 bottom-24 w-56 rounded-2xl border border-border bg-card p-4 shadow-lift"
              style={{ transform: `translateY(${offset * 0.05}px)` }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <BarChart3 className="h-4 w-4 text-primary" /> Dashboard
              </div>
              <div className="mt-4 flex h-16 items-end gap-1.5">
                {[35, 60, 45, 80, 55, 95].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20 last:bg-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div
              className="absolute bottom-4 left-0 w-60 rounded-2xl border border-border bg-card p-4 shadow-lift"
              style={{ transform: `translateY(${offset * 0.08}px)` }}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Send className="h-4 w-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold">Yangi so'rov</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Telegram orqali yetib keldi
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-2 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold shadow-soft">
              <Boxes className="h-4 w-4 text-primary" /> Katalog
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}