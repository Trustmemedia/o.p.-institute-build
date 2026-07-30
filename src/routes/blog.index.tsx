import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Computer Career Guidance | The O.P Institute" },
      {
        name: "description",
        content:
          "Course guidance, Excel and Tally tutorials, GST tips and study advice from the instructors at The O.P Institute, Najafgarh.",
      },
      { property: "og:title", content: "The O.P Institute Blog" },
      {
        property: "og:description",
        content: "Practical guidance on computer courses, careers and software skills.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground lg:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Blog</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Guidance from the people who teach the classes
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Course comparisons, software tutorials and honest career advice — written by our
              instructors, not by a marketing team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-8 rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent lg:grid-cols-[0.35fr_0.65fr] lg:p-10"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  {featured.category}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">
                  {formatDate(featured.date)} · {featured.readTime}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold group-hover:underline sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read article <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold group-hover:underline">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
