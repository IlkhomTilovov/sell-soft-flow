import { Check, Gift, Play, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./reveal";

const OFFER_STACK = [
  "Professional mahsulot katalogi",
  "Narx, o'lcham va material tanlash",
  "Telegram orqali buyurtma qabul qilish",
  "O'zingiz boshqaradigan admin panel",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Mebel bizneslari uchun maxsus
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-[34px] leading-[1.05] font-extrabold tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              Mebelingizni internetda soting.{" "}
              <span className="text-primary">7 kunda tayyor onlayn do'kon.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg font-bold tracking-tight sm:text-xl">
              Aks holda — pulingiz qaytadi.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mijoz mahsulotlarni ko'radi, narx va o'lchamlarni tanlaydi, buyurtma esa
              to'g'ridan-to'g'ri sizga keladi.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/ariza"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                <Rocket className="h-4 w-4" /> Loyiham uchun taklif olish
              </a>
              <a
                href="/video"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-colors hover:border-foreground"
              >
                <Play className="h-4 w-4" /> 2 daqiqalik videoni ko'rish
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Siz olasiz
            </span>
            <ul className="mt-6 space-y-4">
              {OFFER_STACK.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-5 rounded-2xl bg-foreground p-5 text-background">
              <p className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
                7<span className="ml-1 text-lg font-bold sm:text-xl">kun</span>
              </p>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  <Zap className="h-3.5 w-3.5" /> Tayyor
                </p>
                <p className="mt-1 text-sm font-medium opacity-80">
                  Saytingiz tayyor va ishlashga topshiriladi
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10">
                <Gift className="h-4 w-4 text-primary" />
              </span>
              <p className="text-sm font-medium sm:text-base">
                <span className="font-bold text-primary">BONUS:</span> 1 oy bepul texnik yordam
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-primary/25 bg-primary/[0.05] p-5">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                <ShieldCheck className="h-4 w-4" /> Kafolat
              </p>
              <p className="mt-2 text-sm leading-relaxed font-medium sm:text-base">
                7 kunda tayyor bo'lmasa — pulingiz to'liq qaytariladi.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground sm:text-sm">
              Faqat 5 ta mebel biznesi bilan ishlaymiz
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
