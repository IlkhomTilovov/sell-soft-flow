import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, Lock, Rocket } from "lucide-react";
import { Reveal } from "./reveal";
import { sendAriza } from "@/lib/send-ariza";

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Arizangizni ko'rib chiqamiz",
    desc: "Arizangiz va ehtiyojlaringizni o'rganamiz.",
  },
  {
    n: "02",
    title: "Siz bilan bog'lanamiz",
    desc: "Qulay vaqtda siz bilan bog'lanib, savollaringizga javob beramiz.",
  },
  {
    n: "03",
    title: "Loyihangizni muhokama qilamiz",
    desc: "Kerakli funksiyalar, muddat va loyiha tafsilotlarini birgalikda muhokama qilamiz.",
  },
];

const STEP_LABELS = [
  "Kontakt ma'lumotlari",
  "Biznes ma'lumotlari",
  "Loyiha tafsilotlari",
  "Tasdiqlash",
];
const TOTAL_STEPS = STEP_LABELS.length;

type FormState = {
  ism: string;
  tel: string;
  telegram: string;
  soha: string;
  tarif: string;
  kerak: string;
};

const EMPTY_FORM: FormState = { ism: "", tel: "", telegram: "", soha: "", tarif: "", kerak: "" };

const PACKAGES = [
  { tier: "Start", name: "Vitrina sayt", hint: "1–3 sahifali tanishtiruv sayti" },
  { tier: "Business", name: "Katalog + Admin panel", hint: "To'liq onlayn katalog va boshqaruv tizimi" },
  { tier: "Premium", name: "Individual tizim", hint: "Maxsus talablarga moslashtirilgan yechim" },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none";

function formatUzPhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("998") && digits.length > 9) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  if (digits.length === 0) return "";
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)];
  return `+998 ${parts.filter(Boolean).join(" ")}`.trimEnd();
}

function phoneDigits(masked: string) {
  return masked.replace(/\D/g, "").replace(/^998/, "");
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-xs font-semibold tracking-wide text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/70 py-2.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="max-w-[65%] text-right font-medium break-words text-foreground">{value}</span>
    </div>
  );
}

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const step1Valid = form.ism.trim().length > 0 && phoneDigits(form.tel).length === 9;
  const step3Valid = form.tarif.length > 0;

  function update(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function selectTarif(label: string) {
    setForm((f) => ({ ...f, tarif: label }));
    setTouched(false);
  }

  function goNext() {
    if (step === 1 && !step1Valid) {
      setTouched(true);
      return;
    }
    if (step === 3 && !step3Valid) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!step1Valid) {
      setStep(1);
      setTouched(true);
      return;
    }
    if (!step3Valid) {
      setStep(3);
      setTouched(true);
      return;
    }
    if (sending) return;
    setSending(true);
    setSendError(false);
    try {
      await sendAriza({ data: form });
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal className="lg:self-center">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-[28px] leading-[1.08] font-extrabold sm:text-[38px]">
              2 daqiqada loyihangizni <span className="text-primary">baholaymiz.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Bir nechta savolga javob bering. Javoblaringiz asosida mebel biznesingiz uchun
              kerakli sayt va funksiyalarni aniqlab, siz bilan bog'lanamiz.
            </p>

            <div className="mt-8 border-t border-border pt-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Ariza qoldirgandan keyin
              </p>
              <ol className="mt-6">
                {PROCESS_STEPS.map(({ n, title, desc }, i) => (
                  <li key={n} className="relative flex gap-4 pb-7 last:pb-0">
                    {i < PROCESS_STEPS.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-10 bottom-1 left-4 w-px -translate-x-1/2 bg-border"
                      />
                    )}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-[11px] font-bold text-primary">
                      {n}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-foreground">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10">
                <Lock className="h-4 w-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Ma'lumotlaringiz maxfiy saqlanadi.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Ma'lumotlaringiz faqat siz bilan bog'lanish va loyihangizni baholash uchun
                  ishlatiladi.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
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
              <form onSubmit={onSubmit}>
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
                  <span>
                    Bosqich {step} / {TOTAL_STEPS}
                  </span>
                  <span>{STEP_LABELS[step - 1]}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step}
                  </span>
                  <h3 className="text-lg font-semibold">{STEP_LABELS[step - 1]}</h3>
                </div>

                {step === 1 && (
                  <div className="mt-6 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Ismingiz *" htmlFor="ism">
                        <input
                          id="ism"
                          value={form.ism}
                          onChange={update("ism")}
                          placeholder="Ismingiz"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Telefon raqamingiz *" htmlFor="tel">
                        <input
                          id="tel"
                          type="tel"
                          inputMode="tel"
                          value={form.tel}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, tel: formatUzPhone(e.target.value) }))
                          }
                          placeholder="+998 __ ___ __ __"
                          className={inputClass}
                        />
                      </Field>
                    </div>
                    <Field label="Telegram uchun aloqa (ixtiyoriy)" htmlFor="telegram">
                      <input
                        id="telegram"
                        value={form.telegram}
                        onChange={update("telegram")}
                        placeholder="@username yoki t.me/..."
                        className={inputClass}
                      />
                    </Field>
                    {touched && !step1Valid && (
                      <p className="text-xs font-medium text-destructive">
                        Iltimos, ismingizni va telefon raqamingizni to'liq kiriting.
                      </p>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Field label="Biznes sohasi" htmlFor="soha">
                      <input
                        id="soha"
                        value={form.soha}
                        onChange={update("soha")}
                        placeholder="Masalan: mebel, savdo"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                )}

                {step === 3 && (
                  <div className="mt-6 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                        Qaysi paket sizga mos? *
                      </span>
                      <div className="mt-2 space-y-2.5">
                        {PACKAGES.map((pkg) => {
                          const label = `${pkg.tier} — ${pkg.name}`;
                          const selected = form.tarif === label;
                          return (
                            <button
                              key={pkg.tier}
                              type="button"
                              onClick={() => selectTarif(label)}
                              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none ${
                                selected
                                  ? "border-primary bg-primary/10"
                                  : "border-border bg-surface hover:border-foreground/30"
                              }`}
                            >
                              <span>
                                <span className="block text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                  {pkg.tier}
                                </span>
                                <span className="font-semibold text-foreground">{pkg.name}</span>
                                <span className="block text-xs text-muted-foreground">{pkg.hint}</span>
                              </span>
                              <span
                                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                                  selected ? "border-primary bg-primary" : "border-border"
                                }`}
                              >
                                {selected && <Check className="h-3 w-3 text-primary-foreground" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      {touched && !step3Valid && (
                        <p className="mt-2 text-xs font-medium text-destructive">
                          Paketni tanlang.
                        </p>
                      )}
                    </div>
                    <Field label="Sizga nima kerak? (ixtiyoriy)" htmlFor="kerak">
                      <textarea
                        id="kerak"
                        rows={3}
                        value={form.kerak}
                        onChange={update("kerak")}
                        placeholder="Web sayt, katalog, admin panel..."
                        className={`${inputClass} resize-none`}
                      />
                    </Field>
                  </div>
                )}

                {step === 4 && (
                  <div className="mt-6 rounded-xl border border-border bg-surface px-4 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <SummaryRow label="Ism" value={form.ism} />
                    <SummaryRow label="Telefon" value={form.tel} />
                    {form.telegram && <SummaryRow label="Telegram" value={form.telegram} />}
                    {form.soha && <SummaryRow label="Soha" value={form.soha} />}
                    <SummaryRow label="Tanlangan paket" value={form.tarif} />
                    {form.kerak && <SummaryRow label="Kerak" value={form.kerak} />}
                  </div>
                )}

                <div className="mt-7 flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" /> Orqaga
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < TOTAL_STEPS ? (
                    <button
                      key="next-btn"
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                    >
                      Davom etish <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      key="submit-btn"
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Yuborilmoqda...
                        </>
                      ) : (
                        <>
                          <Rocket className="h-4 w-4" /> Arizani yuborish{" "}
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {sendError && (
                  <p className="mt-4 text-center text-xs font-medium text-destructive">
                    Xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki Telegram orqali
                    bog'laning.
                  </p>
                )}

                <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5 shrink-0" />
                  Ma'lumotlaringiz xavfsiz saqlanadi va faqat siz bilan bog'lanish uchun ishlatiladi.
                </p>
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
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold tracking-[0.14em] uppercase">Sell Soft</p>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              Mebel bizneslarini onlayn katalog orqali kuchaytiramiz.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/60">
            <a href="tel:+998971434541" className="block transition-colors hover:text-white">
              +998 97 143 45 41
            </a>
            <a
              href="https://t.me/Sellsoftuz"
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