import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/op-institute-logo.jpg";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    <header>
      <div className="border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="The O.P Institute logo"
              width={44}
              height={44}
              className="size-11 rounded-md object-cover ring-1 ring-border"
            />

            <span className="leading-tight">
              <span className="block font-display text-base font-semibold tracking-tight sm:text-lg">
                The O.P Institute
              </span>

              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Najafgarh · Since {site.established}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{
                  className: "!text-foreground bg-secondary",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Book Free Demo
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            >
              {open ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-0 z-50 bg-ink text-ink-foreground lg:hidden">
          <div className="container-page flex h-18 items-center justify-between py-3">
            <span className="font-display text-lg font-semibold">Menu</span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-md border border-ink-border"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav
            className="container-page flex flex-col pb-10"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink-border py-4 font-display text-2xl font-semibold"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brass px-6 py-3.5 font-semibold text-brass-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
