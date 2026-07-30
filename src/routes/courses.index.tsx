import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, IndianRupee, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { courses } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Computer Courses in Najafgarh — The O.P Institute" },
      {
        name: "description",
        content:
          "Tally with GST, Advanced MS Office, Python, full stack web development, graphic design, digital marketing and NIELIT O Level. Fees, duration and syllabus for every course.",
      },
      { property: "og:title", content: "Computer Courses in Najafgarh — The O.P Institute" },
      {
        property: "og:description",
        content: "Eight job-focused programmes with transparent fees and full syllabus details.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesIndex,
});

const categories = ["All", "Basics", "Programming", "Design", "Accounting", "Career"] as const;

function CoursesIndex() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? courses : courses.filter((c) => c.category === active)),
    [active],
  );

  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground lg:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Courses</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Eight programmes, one standard of teaching
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Transparent fees, published syllabus, and a free demo class before you commit to any of
              them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-center gap-2">
            <span className="mr-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <SlidersHorizontal className="size-4" aria-hidden="true" /> Filter
            </span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === category
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((course, i) => (
              <Reveal key={course.slug} delay={Math.min(i, 5) * 0.05}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{course.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {course.short}
                  </p>
                  <dl className="mt-6 flex items-center gap-6 border-t border-border pt-5 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-accent" aria-hidden="true" />
                      <dt className="sr-only">Duration</dt>
                      <dd className="text-muted-foreground">{course.duration}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <IndianRupee className="size-4 text-accent" aria-hidden="true" />
                      <dt className="sr-only">Fee</dt>
                      <dd className="font-semibold">{course.fee.replace("₹", "")}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    Syllabus & details <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
