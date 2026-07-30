import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import galleryOne from "@/assets/gallery-1.jpg";
import galleryTwo from "@/assets/gallery-2.jpg";
import galleryThree from "@/assets/gallery-3.jpg";
import galleryFour from "@/assets/gallery-4.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import director from "@/assets/about-director.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Campus Gallery — The O.P Institute, Najafgarh" },
      {
        name: "description",
        content:
          "Photos of our computer labs, classrooms, certificate ceremonies and students at work at The O.P Institute in Najafgarh.",
      },
      { property: "og:title", content: "Campus Gallery — The O.P Institute" },
      {
        property: "og:description",
        content: "A look inside the labs, classrooms and student life at The O.P Institute.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery;
});

const images = [
  { src: heroClassroom, alt: "Main computer lab in session", caption: "Main lab · 24 seats", span: "lg:col-span-2 lg:row-span-2" },
  { src: galleryOne, alt: "Students holding their course certificates", caption: "Certificate day", span: "" },
  { src: galleryTwo, alt: "Empty computer lab with ambient lighting", caption: "Programming lab", span: "" },
  { src: galleryThree, alt: "A student practising at her computer", caption: "Practice hours", span: "" },
  { src: galleryFour, alt: "Instructor explaining spreadsheets on a whiteboard", caption: "Excel workshop", span: "" },
  { src: director, alt: "Founder of The O.P Institute", caption: "Our founder", span: "" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground lg:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Gallery</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Inside The O.P Institute
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Our labs, our classrooms and the students who fill them six days a week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Campus" title="Real rooms, real machines, real students" />
          <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, i) => (
              <Reveal key={image.caption} delay={Math.min(i, 5) * 0.05} className={image.span}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative size-full overflow-hidden rounded-lg"
                  aria-label={`Open image: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 text-left text-sm font-medium text-ink-foreground">
                    {image.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].caption}
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 inline-flex size-11 items-center justify-center rounded-md border border-ink-border text-ink-foreground"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ink-muted">
              {images[active].caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
