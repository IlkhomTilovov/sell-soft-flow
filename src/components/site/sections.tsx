import { ArrowRight, ArrowDown, Check, X } from "lucide-react";
import { Reveal, SectionLabel } from "./reveal";
import mebelShot from "@/assets/project-giometrie.png";
import adminShot from "@/assets/project-giometrie-admin.png";

export function ValueStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-lg font-semibold tracking-tight sm:text-2xl">
            {["Web sayt.", "Online katalog.", "Admin panel.", "Integratsiya."].map((t, i) => (
              <span key={t} className="flex items-center gap-6">
                {i > 0 && <span className="h-4 w-px bg-border" />}
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Mebel do'koningiz uchun kerakli onlayn katalog infratuzilmasini bitta joyda yaratamiz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const PROBLEMS = [
  "Mijozlar mebellaringizni birma-bir so'raydi",
  "Har bir mijozga narxni qo'lda yuborasiz",
  "Instagram'dan kelgan mijozlar javob kutmay ketib qoladi",
  "Mebel do'koningiz uchun professional onlayn katalog yo'q",
];

const FLOW = [
  "Instagram / Google / Bevosita",
  "Veb-sayt",
  "Katalog / Ma'lumot / So'rov",
  "Telegram / Admin panel",
];

export function ProblemSolution() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <h2 className="max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
          Mebellaringizni hali ham Instagram DM orqali sotyapsizmi?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          {PROBLEMS.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="flex items-start gap-4 border-b border-border py-5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
                <p className="text-base text-muted-foreground sm:text-lg">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
            <SectionLabel>Sell Soft yechimi</SectionLabel>
            <p className="mt-5 text-xl leading-snug font-bold tracking-tight sm:text-2xl">
              Barcha kerakli ma'lumotlar va jarayonlar bitta professional web tizimda.
            </p>
            <div className="mt-8 space-y-1">
              {FLOW.map((step, i) => (
                <div key={step}>
                  <div
                    className={
                      i === 1
                        ? "rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4 text-sm font-semibold text-primary sm:text-base"
                        : "rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium sm:text-base"
                    }
                  >
                    {step}
                  </div>
                  {i < FLOW.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="h-4 w-4 text-subtle" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const OFFER_STACK = [
  {
    t: "Onlayn katalog",
    d: "Barcha mebellaringiz rasmi, narxi va o'lchami bilan — mijoz so'ramasdan o'zi ko'radi.",
  },
  {
    t: "Admin panel",
    d: "Narx o'zgartirish, yangi mebel qo'shish — dasturchisiz, o'zingiz boshqarasiz.",
  },
  {
    t: "Telegram integratsiyasi",
    d: "Har bir buyurtma darhol Telegram'ingizga tushadi — bironta mijoz yo'qolmaydi.",
  },
  {
    t: "Boshlang'ich SEO",
    d: "Google'da topilasiz — mijoz faqat Instagram'dan kelmaydi.",
  },
  {
    t: "O'rgatish va qo'llanma",
    d: "Tizimni topshirganda ishlatishni ham o'rgatamiz — savol bilan yolg'iz qolmaysiz.",
  },
];

export function OfferStack() {
  return (
    <section id="taklif" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionLabel>Taklif</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
          «7 kunlik katalog» paketi — hammasi bitta narxda.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Sayt, katalog, admin panel va integratsiyani alohida-alohida emas — do'koningiz uchun
          tayyor ishlaydigan bitta tizim sifatida topshiramiz.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          {OFFER_STACK.map((item, i) => (
            <Reveal key={item.t} delay={i * 60}>
              <div className="flex items-start gap-4 border-b border-border py-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <div>
                  <p className="text-base font-semibold tracking-tight sm:text-lg">{item.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-3xl border border-primary/25 bg-primary/[0.04] p-7 sm:p-9">
            <SectionLabel>Kafolat</SectionLabel>
            <p className="mt-5 text-xl leading-snug font-bold tracking-tight sm:text-2xl">
              7 kunda topshirmasak — tayyor bo'lguncha bepul davom ettiramiz.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Xavf bizda, natija sizda. Muddat kelishilgan kundan boshlab hisoblanadi va yozma
              tarzda belgilanadi.
            </p>
            <div className="mt-auto pt-8">
              <a
                href="/video"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Qanday ishlashini videoda ko'ring <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                2 daqiqalik video — keyin so'rovnomani to'ldirasiz.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    n: "01",
    t: "Onlayn katalog",
    d: "Barcha mebellaringiz rasmi, narxi va o'lchami bilan tartibli — mijoz o'zi ko'rib, o'zi tanlaydi.",
  },
  {
    n: "02",
    t: "Admin panel",
    d: "Yangi mebel qo'shish, narx o'zgartirish, mavjudlikni belgilash — dasturchisiz, o'zingiz.",
  },
  {
    n: "03",
    t: "Telegram integratsiyasi",
    d: "Yangi buyurtma darhol Telegram'ingizga tushadi — birorta ham mijozni qo'ldan boy bermaysiz.",
  },
  {
    n: "04",
    t: "SEO va Google",
    d: "\"Mebel do'koni\" qidirganda Google'da sizni topishadi — mijoz faqat Instagramdan kelmaydi.",
  },
  {
    n: "05",
    t: "Web sayt",
    d: "Mijoz birinchi marta kirganda ishonch hosil qiladigan tez va zamonaviy dizayn.",
  },
];

export function Services() {
  return (
    <section id="xizmatlar" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionLabel>Xizmatlar</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
            Sayt emas. Mebellaringizni sotadigan tizim.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="text-sm font-semibold text-subtle transition-colors group-hover:text-primary">
                  {s.n}
                </span>
                <h3 className="mt-8 text-xl font-bold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "Giometrie",
    desc: "Mijozlar Instagram DM o'rniga saytda mebellarni ko'rib, to'g'ridan-to'g'ri buyurtma beradi.",
    tags: ["Online katalog", "Admin panel", "Telegram integratsiyasi"],
    img: mebelShot,
  },
  {
    name: "Giometrie — Admin panel",
    desc: "Toifalar, mahsulotlar va SEO holatini bitta joydan boshqaradi — dasturchisiz.",
    tags: ["Admin panel", "Avtomatlashtirish", "SEO nazorati"],
    img: adminShot,
  },
];

export function Projects() {
  return (
    <section id="ishlarimiz" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionLabel>Ishlarimiz</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
          Mebel biznesi uchun ishlagan tizim.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Giometrie — mana shunday katalog va admin panelni sizning do'koningiz uchun ham 7
          kunda quramiz.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16 sm:space-y-24">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name}>
            <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
                  <img
                    src={p.img}
                    alt={`${p.name} web loyihasi ekran ko'rinishi`}
                    loading="lazy"
                    width={1600}
                    height={1104}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{p.name}</h3>
                <p className="mt-3 text-base text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="/ariza"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Loyihani ko'rish <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const WHY = [
  {
    n: "01",
    t: "Biznesni tushunamiz",
    d: "Sayt yaratishdan oldin mijozingiz va ish jarayoningizni o'rganamiz.",
  },
  {
    n: "02",
    t: "Mijoz uchun qulay qilamiz",
    d: "Dizayn nafaqat chiroyli, balki tushunarli va qulay bo'lishi kerak.",
  },
  {
    n: "03",
    t: "Tizim yaratamiz",
    d: "Katalog, admin panel va integratsiyalar orqali jarayonlarni birlashtiramiz.",
  },
  {
    n: "04",
    t: "Rivojlanishga tayyor qilamiz",
    d: "Yaratilgan yechim kelajakda kengaytirish imkoniyatiga ega bo'ladi.",
  },
];

export function WhySellSoft() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
            Biz shunchaki sayt qilmaymiz.
          </h2>
        </Reveal>

        <div className="mt-14">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={i * 60}>
              <div className="relative overflow-hidden border-t border-white/10 py-9">
                <span className="pointer-events-none absolute -top-3 right-0 text-[80px] leading-none font-extrabold text-white/[0.05] select-none sm:text-[120px]">
                  {w.n}
                </span>
                <div className="relative grid gap-3 lg:grid-cols-[0.4fr_1fr] lg:gap-10">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{w.t}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                    {w.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", day: "1-kun", t: "Ariza va suhbat" },
  { n: "02", day: "2-kun", t: "Biznesingizni o'rganamiz" },
  { n: "03", day: "3-kun", t: "Taklif va reja tayyorlaymiz" },
  { n: "04", day: "4–6-kun", t: "Dizayn va ishlab chiqish" },
  { n: "05", day: "7-kun", t: "Sinov va ishga tushirish" },
];

export function Process() {
  return (
    <section id="jarayon" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionLabel>Jarayon</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
          7 kunlik jarayon. Aniq natija.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 80} className="bg-background">
            <div className="h-full p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-primary/5 text-xs font-bold text-primary">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.1em] text-primary uppercase">
                {s.day}
              </p>
              <p className="mt-1.5 text-base font-semibold tracking-tight">{s.t}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const PLANS = [
  {
    tier: "Start",
    name: "Vitrina sayt",
    desc: "Tez boshlamoqchi bo'lgan mebel ustaxonalari uchun sodda, 1–3 sahifali tanishtiruv sayti.",
    items: [
      "1–3 sahifa",
      "Responsive dizayn",
      "Telegram / WhatsApp integratsiyasi",
      "Bog'lanish formasi",
    ],
    cta: "Boshlash",
    featured: false,
  },
  {
    tier: "Business",
    name: "Katalog + Admin panel",
    desc: "Mebel do'koningiz uchun to'liq onlayn katalog va boshqaruv tizimi — 7 kunda ishga tushadi.",
    items: [
      "Ko'p sahifali sayt",
      "Admin panel",
      "Onlayn mebel katalogi",
      "Telegram integratsiyasi",
      "Boshlang'ich SEO sozlash",
    ],
    cta: "Loyihani muhokama qilish",
    featured: true,
  },
  {
    tier: "Premium",
    name: "Individual tizim",
    desc: "Bir nechta filialga ega yoki maxsus jarayonli yirik mebel bizneslari uchun moslashtirilgan yechim.",
    items: [
      "Individual dizayn",
      "Kengaytirilgan katalog",
      "Maxsus admin panel",
      "Avtomatlashtirish",
      "API integratsiyalar",
      "Custom funksionallik",
    ],
    cta: "Individual yechim olish",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="narxlar" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-[30px] leading-[1.08] font-extrabold sm:text-[44px]">
            Biznesingizga mos yechimni tanlang.
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            Kelishilgan muddatda topshirmasak — loyiha tayyor bo'lguncha bepul davom ettiramiz.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.tier} delay={i * 80}>
              <div
                className={
                  p.featured
                    ? "flex h-full flex-col rounded-3xl border border-foreground/15 bg-card p-8 shadow-lift"
                    : "flex h-full flex-col rounded-3xl border border-border bg-card p-8"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    {p.tier}
                  </span>
                  {p.featured && (
                    <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                      Eng ommabop • 7 kun
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-6 border-y border-border py-4 text-sm font-medium">
                  Narx loyiha talabiga qarab belgilanadi.
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/ariza"
                  className={
                    p.featured
                      ? "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
                      : "mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
                  }
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}