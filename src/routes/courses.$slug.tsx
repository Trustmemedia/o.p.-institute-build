import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, CheckCircle2, Clock, IndianRupee, Layers } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { courses, type Course } from "@/data/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Course not found — The O.P Institute" }, { name: "robots", content: "noindex" }],
      };
    }
    const { course } = loaderData;
    const description = `${course.short} ${course.duration} · ${course.fee} at The O.P Institute, Najafgarh.`;
    return {
      meta: [
        { title: `${course.title} in Najafgarh — The O.P Institute` },
        { name: "description", content: description },
        { property: "og:title", content: `${course.title} — The O.P Institute` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.short,
            provider: {
              "@type": "EducationalOrganization",
              name: "The O.P Institute",
              sameAs: "/",
            },
          }),
        },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();

  return (
    <>
      <section className="bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="container-page">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-brass"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All courses
          </Link>
          <Reveal>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              {course.category} · {course.level}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{course.short}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-brass" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Duration</dt>
                  <dd className="font-display text-lg font-semibold">{course.duration}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IndianRupee className="size-5 text-brass" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Total fee</dt>
                  <dd className="font-display text-lg font-semibold">{course.fee}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="size-5 text-brass" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Modules</dt>
                  <dd className="font-display text-lg font-semibold">{course.syllabus.length}</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">Syllabus</h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {course.syllabus.map((module, i) => (
                <Reveal key={module.module} delay={i * 0.05}>
                  <div className="rounded-lg border border-border bg-card p-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold">{module.module}</h3>
                    </div>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">What you will be able to do</h2>
              <ul className="mt-6 space-y-4">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="sticky top-32 rounded-lg border border-border bg-surface p-7">
              <p className="font-display text-3xl font-bold">{course.fee}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Payable monthly · no registration charge
              </p>
              <Link
                to="/contact"
                className="mt-7 flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a free demo
              </Link>
              <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <li>Batch size limited to 12</li>
                <li>Morning & evening slots</li>
                <li>Certificate on completion</li>
                <li>Placement assistance included</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold">Other courses</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {courses
              .filter((c) => c.slug !== course.slug)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.slug}
                  to="/courses/$slug"
                  params={{ slug: other.slug }}
                  className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
                >
                  <h3 className="font-semibold">{other.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {other.duration} · {other.fee}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
