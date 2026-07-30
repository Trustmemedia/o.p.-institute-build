import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/op-institute-logo.jpg.asset.json";
import { courses, nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="The O.P Institute logo"
              width={44}
              height={44}
              loading="lazy"
              className="size-11 rounded-md object-cover"
            />
            <span className="font-display text-lg font-semibold text-ink-foreground">
              The O.P Institute
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            {site.tagline}. Training Najafgarh in job-ready computer skills since {site.established} —
            small batches, real machines, government-valid certification.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-foreground">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-foreground">
            Popular Courses
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {courses.slice(0, 6).map((course) => (
              <li key={course.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="transition-colors hover:text-brass"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-foreground">
            Visit Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brass">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-brass">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The O.P Institute, Najafgarh. All rights reserved.
          </p>
          <p>ISO 9001:2015 Certified Computer Training Centre</p>
        </div>
      </div>
    </footer>
  );
}
