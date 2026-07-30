import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Admissions — The O.P Institute, Najafgarh" },
      {
        name: "description",
        content:
          "Visit or call The O.P Institute in Najafgarh, New Delhi. Book a free demo class, ask about fees, batch timings and admissions.",
      },
      { property: "og:title", content: "Contact The O.P Institute, Najafgarh" },
      {
        property: "og:description",
        content: "Book a free demo class or ask about course fees and batch timings.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address").or(z.literal("")),
  course: z.string().min(1, "Please choose a course"),
  message: z.string().max(600, "Please keep it under 600 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", course: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success(`Thanks ${values.name.split(" ")[0]} — we'll call you within one working day.`);
    reset();
  };

  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground lg:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Contact & admissions
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Come and see a class before you decide
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Walk in during working hours or send this form — we will call you back with batch
              timings, fee details and a demo slot.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Enquiry form" title="Book your free demo class" />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name ? (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile number</Label>
                  <Input id="phone" inputMode="numeric" placeholder="10-digit number" {...register("phone")} />
                  {errors.phone ? (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                {errors.email ? (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course you are interested in</Label>
                <select
                  id="course"
                  {...register("course")}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.slug} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet — need guidance</option>
                </select>
                {errors.course ? (
                  <p className="text-xs text-destructive">{errors.course.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Anything else? (optional)</Label>
                <Textarea id="message" rows={4} placeholder="Preferred timing, questions..." {...register("message")} />
                {errors.message ? (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Request my demo class"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-surface p-8">
                <h2 className="text-lg font-semibold">Visit the institute</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{site.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <a href={`mailto:${site.email}`} className="hover:underline">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{site.hours}</span>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground"
                >
                  <MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Map showing The O.P Institute location in Najafgarh"
                  src="https://www.google.com/maps?q=Najafgarh,New%20Delhi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
