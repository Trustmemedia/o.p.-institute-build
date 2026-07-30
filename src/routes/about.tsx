import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import directorImage from "@/assets/about-director.jpg";
import galleryFour from "@/assets/gallery-4.jpg";
import { site, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The O.P Institute, Najafgarh" },
      {
        name: "description",
        content:
          "Since 2009 The O.P Institute has trained over 12,000 students in Najafgarh with small batches, bilingual teaching and government-valid certification.",
      },
      { property: "og:title", content: "About The O.P Institute, Najafgarh" },
      {
        property: "og:description",
        content:
          "Our story, our teaching method and the people behind Najafgarh's most trusted computer institute.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  {
    year: "2009",
    title: "Six computers, one room",
    body: "The institute opens above a stationery shop on Najafgarh Road with six machines and evening batches only.",
  },
  {
    year: "2013",
    title: "Tally & accounting wing",
    body: "Local traders ask for computerised billing training. The accounting programme becomes our most requested course.",
  },
  {
    year: "2017",
    title: "NIELIT 'O' Level centre",
    body: "Government-recognised syllabus added, opening the door to public-sector IT eligibility for our students.",
  },
  {
    year: "2021",
    title: "Programming lab",
    body: "A dedicated 24-seat lab for Python and web development, with project mentoring and GitHub portfolios.",
  },
  {
    year: "2026",
    title: "12,000 alumni",
    body: "Graduates working across Delhi NCR in accounts, design, marketing and software roles.",
  },
];

const values = [
  {
    title: "Teach until it clicks",
    body: "A concept is not finished when it has been explained. It is finished when the student can do it unaided.",
  },
  {
    title: "Practice over theory",
    body: "Roughly 70% of every class is hands-on work at the keyboard, using real files and real business scenarios.",
  },
  {
    title: "Honest guidance",
    body: "We will tell you when a course is not right for you. Enrolling the wrong student helps nobody.",
  },
];

function About() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground lg:py-28">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">About us</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              A neighbourhood institute with a professional standard
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {site.tagline}. We have spent {new Date().getFullYear() - site.established} years doing
              one thing properly — turning beginners into people who are genuinely useful with a
              computer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={directorImage}
              alt="Founder of The O.P Institute standing in the computer lab"
              width={1000}
              height={1200}
              loading="lazy"
              className="aspect-4/5 w-full rounded-lg object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="From the founder"
              title="“I still teach the first week of every beginner batch.”"
              description="Because the first week decides whether a student stays. If they leave day one feeling capable instead of embarrassed, the rest of the course takes care of itself."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  We started because families in Najafgarh were paying central-Delhi fees for
                  training they could not follow. Everything here is designed around that problem:
                  bilingual teaching, unlimited lab practice, and instructors who sit beside you
                  rather than lecture from the front.
                </p>
                <p>
                  We do not promise jobs. We promise that when you finish, you will be able to do the
                  work — and we will introduce you to the people hiring for it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Our journey" title="How the institute grew" />
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <img
                src={galleryFour}
                alt="A class in progress at The O.P Institute"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full rounded-lg object-cover"
              />
            </Reveal>
            <ol className="relative border-l border-border pl-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06}>
                  <li className="relative pb-10 last:pb-0">
                    <span
                      className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full bg-accent ring-4 ring-surface"
                      aria-hidden="true"
                    />
                    <p className="font-display text-sm font-bold tracking-wide text-accent-foreground">
                      {item.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we believe" title="Three rules we do not bend" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-border bg-card p-8">
                  <span className="font-display text-4xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/courses"
              className="mt-12 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See our courses <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
