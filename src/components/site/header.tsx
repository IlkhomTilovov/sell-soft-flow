import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [{ label: "Bosh sahifa", href: "/#top" }];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <a href="/#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-foreground">
            <span className="h-2 w-2 rounded-sm bg-primary" />
          </span>
          <span className="text-[15px] font-extrabold tracking-tight">Sell Soft</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/ariza"
            className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary sm:inline-flex"
          >
            Loyihani boshlash <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Menyu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-14 z-50 bg-background px-5 pt-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 text-2xl font-bold tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/ariza"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-base font-semibold text-background"
          >
            Loyihani boshlash <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}