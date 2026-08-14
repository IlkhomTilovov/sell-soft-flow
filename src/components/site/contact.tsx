import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";

const FIELDS = [
  { id: "ism", label: "Ismingiz", type: "text", placeholder: "Ismingiz" },
  { id: "tel", label: "Telefon raqamingiz", type: "tel", placeholder: "+998 __ ___ __ __" },
  { id: "soha", label: "Biznes sohasi", type: "text", placeholder: "Masalan: mebel, savdo" },
  { id: "byudjet", label: "Taxminiy byudjet", type: "text", placeholder: "Ixtiyoriy" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="boglanish" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-[30px] leading-[1.06] font-extrabold sm:text-[46px]">
            Biznesingizga qanday web yechim kerakligini birga aniqlaymiz.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Loyihangiz haqida qisqacha ma'lumot qoldiring. Biz sizning biznesingizga mos web
            yechimni taklif qilamiz.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary">
                  <Check className="h-6 w-6 text-primary-foreground" />
                </span>
                <p className="mt-6 max-w-xs text-lg font-semibold">
                  So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {FIELDS.map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="text-xs font-semibold tracking-wide text-white/50"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.id === "ism" || f.id === "tel"}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="kerak"
                    className="text-xs font-semibold tracking-wide text-white/50"
                  >
                    Sizga nima kerak?
                  </label>
                  <textarea
                    id="kerak"
                    name="kerak"
                    rows={3}
                    placeholder="Web sayt, katalog, admin panel..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Bepul konsultatsiya olish <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-extrabold tracking-[0.14em] uppercase">Sell Soft</p>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              Bizneslarni web orqali kuchaytiramiz.
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-white/60">
            {[
              ["Xizmatlar", "#xizmatlar"],
              ["Ishlarimiz", "#ishlarimiz"],
              ["Jarayon", "#jarayon"],
              ["Narxlar", "#narxlar"],
              ["Bog'lanish", "#boglanish"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-white/60">
            <a href="mailto:info@sellsoft.uz" className="block transition-colors hover:text-white">
              info@sellsoft.uz
            </a>
            <a href="tel:+998900000000" className="block transition-colors hover:text-white">
              +998 90 000 00 00
            </a>
            <a
              href="https://t.me/sellsoft"
              className="block transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 Sell Soft. All rights reserved.
        </p>
      </div>
    </footer>
  );
}