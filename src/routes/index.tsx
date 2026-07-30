import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  GraduationCap,
  Laptop,
  MapPin,
  Quote,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import galleryOne from "@/assets/gallery-1.jpg";
import galleryThree from "@/assets/gallery-3.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courses, faqs, features, site, stats, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The O.P Institute — Best Computer Institute In Najafgarh" },
      {
        name: "description",
        content:
          "Learn Tally with GST, MS Office, Python, web development, graphic design and NIELIT O Level at Najafgarh's most trusted computer institute. Small batches, free demo class.",
      },
      { property: "og:title", content: "The O.P Institute — Best Computer Institute In Najafgarh" },
      {
        property: "og:description",
        content:
          "12,000+ students trained since 2009. Job-ready computer courses with placement support in Najafgarh, Delhi.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const iconFor = [GraduationCap, Laptop, BadgeCheck, Users, CalendarClock, MapPin];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="Students learning at The O.P Institute computer lab in Najafgarh"
          width={1600}
          height={1008}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/45"
          aria-hidden="true"
        />
        <div className="container-page relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Since {site.established} · Najafgarh, Delhi
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                The Best Computer Institute
                <span className="block text-brass">In Najafgarh</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                Practical, job-focused training on real machines. Twelve students to a batch, every
                concept taught in Hindi and English, and placement support that continues after your
                certificate.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-md bg-brass px-7 py-3.5 font-semibold text-brass-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore Courses <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-border px-7 py-3.5 font-semibold text-ink-foreground transition-colors hover:bg-ink-border/40"
                >
                  Book a Free Demo
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <div className="relative">
              <img
                src={galleryThree}
                alt="A student practising on a computer during class"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full rounded-lg object-cover shadow-2xl ring-1 ring-ink-border"
              />
              <div className="absolute -bottom-8 -left-8 rounded-lg border border-ink-border bg-ink/95 p-6 backdrop-blur">
                <p className="font-display text-4xl font-bold text-brass">96%</p>
                <p className="mt-1 max-w-36 text-sm text-ink-muted">
                  of our graduates get placement support within 6 months
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why students choose us"
            title="Everything a small institute should be — and rarely is"
            description="No crowded batches, no shared keyboards, no certificate mills. Just structured teaching on equipment you would actually find in an office."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = iconFor[i % iconFor.length];
              return (
                <Reveal key={feature.title} delay={i * 0.05}>
                  <div className="group h-full bg-card p-8 transition-colors hover:bg-secondary">
                    <span className="inline-flex size-11 items-center justify-center rounded-md bg-accent/15 text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Courses"
              title="Programmes that lead to work"
              description="Every course ends with a portfolio, a project or a live filing — not just a certificate."
            />
            <Reveal delay={0.1}>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
              >
                View all {courses.length} courses <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course, i) => (
              <Reveal key={course.slug} delay={i * 0.05}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                >
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {course.short}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="font-display font-semibold text-foreground">{course.fee}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={galleryOne}
              alt="Students receiving certificates at The O.P Institute"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About the institute"
              title="Fifteen years of teaching Najafgarh, one student at a time"
              description="The O.P Institute started in 2009 with six computers in a single room. What has not changed is the method: sit with the student until the concept is theirs."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "ISO 9001:2015 certified training centre",
                  "NIELIT 'O' Level authorised syllabus",
                  "120+ hiring partners across Delhi NCR",
                  "Free lifetime access to recorded revision classes",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                to="/about"
                className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Our story <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Student voices"
            title="What our students say after they leave"
            tone="dark"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="h-full rounded-lg border border-ink-border bg-ink/40 p-8">
                  <Quote className="size-7 text-brass" aria-hidden="true" />
                  <blockquote className="mt-5 text-base leading-relaxed text-ink-foreground/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink-border pt-5 text-sm">
                    <span className="font-semibold text-ink-foreground">{t.name}</span>
                    <span className="block text-ink-muted">{t.course}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we answer at the front desk every day"
          />
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent py-16 text-accent-foreground lg:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Your free demo class is waiting</h2>
            <p className="mt-4 text-base opacity-85">
              Walk in, sit at a machine, and see how we teach before you pay anything. Batches start
              every Monday.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-7 py-3.5 font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Reserve a seat <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-accent-foreground/30 px-7 py-3.5 font-semibold"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
