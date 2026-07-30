import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { posts, type Post } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — The O.P Institute" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — The O.P Institute` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "The O.P Institute" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="container-page">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-brass"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All articles
          </Link>
          <Reveal>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-ink-muted">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
          </Reveal>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="border-l-2 border-accent pl-6 text-lg leading-relaxed text-foreground">
            {post.excerpt}
          </p>
          <div className="mt-10 space-y-6">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={0} y={14}>
                <p className="text-base leading-[1.85] text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-border bg-surface p-8">
            <h2 className="text-xl font-semibold">Want to discuss this in person?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Our counselling desk is open six days a week and there is no charge for guidance.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground"
            >
              Talk to a counsellor
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
