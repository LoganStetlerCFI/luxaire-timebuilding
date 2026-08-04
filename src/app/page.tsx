import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  BriefcaseIcon,
  ChevronRightIcon,
  ClockIcon,
  CompassIcon,
  GaugeIcon,
  ShieldCheckIcon,
  UsersIcon,
  WrenchIcon,
} from "@/components/icons";

const paths = [
  {
    name: "Flight Training",
    icon: UsersIcon,
    description:
      "Work one-on-one with our instructors toward your Private, Instrument, or Commercial certificate — training built around your goals and your pace.",
    cta: "Explore Flight Training",
    href: "/about#programs",
  },
  {
    name: "Time Building",
    icon: ClockIcon,
    description:
      "Already have your ratings? Complete a checkout, then rent our fleet and fly as much as you want, whenever you want.",
    cta: "Explore Time Building",
    href: "/time-building",
  },
];

const programs = [
  {
    name: "Private Pilot",
    icon: GaugeIcon,
    description:
      "Earn your wings and the freedom to fly yourself and passengers for personal travel and recreation.",
  },
  {
    name: "Instrument Rating",
    icon: CompassIcon,
    description:
      "Learn to fly confidently through clouds and weather, sharpening your precision and expanding your safety margin.",
  },
  {
    name: "Commercial Pilot",
    icon: BriefcaseIcon,
    description:
      "Turn your passion into a career with the training required to fly professionally.",
  },
];

const differentiators = [
  {
    name: "Owner-Operated Fleet",
    icon: ShieldCheckIcon,
    description:
      "We own every aircraft in our fleet outright, giving us full control over maintenance schedules, availability, and quality standards for our students.",
  },
  {
    name: "In-House Maintenance",
    icon: WrenchIcon,
    description:
      "Our aircraft are cared for by our own experienced in-house maintenance team, keeping every plane airworthy and ready to fly.",
  },
  {
    name: "Instructors Focused on You",
    icon: UsersIcon,
    description:
      "Our experienced flight instructors build every lesson around the individual student — your goals, your pace, your success.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[36rem] w-[36rem] text-navy-700"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="pointer-events-none absolute bottom-[-4rem] left-[-6rem] h-80 w-[40rem] text-luxaire-500/20"
          viewBox="0 0 600 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 160 C 150 40, 350 40, 600 140"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-luxaire-400">
            Flight Training School · DeLand, FL
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-luxaire-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600"
            >
              Schedule a Discovery Flight
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
              Two Paths
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              What are your goals?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.name}
                className="flex flex-col rounded-lg border border-slate-200 bg-white p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-navy-900">
                  <path.icon className="h-7 w-7 text-luxaire-400" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-navy-900">
                  {path.name}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {path.description}
                </p>
                <Link
                  href={path.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-md bg-luxaire-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600"
                >
                  {path.cta}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Both paths fly the same owner-operated, in-house maintained fleet.{" "}
            <Link
              href="/fleet"
              className="font-semibold text-luxaire-700 hover:text-luxaire-600"
            >
              View our fleet
            </Link>
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Training We Offer
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-900">
                <program.icon className="h-5 w-5 text-luxaire-400" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {program.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {program.description}
              </p>
              <Link
                href="/about#programs"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-800 hover:text-luxaire-700"
              >
                Learn more
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Training you can trust, from the ground up
            </h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.name} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-luxaire-500/40 bg-white">
                  <item.icon className="h-5 w-5 text-luxaire-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-8">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your aviation journey?
          </h2>
          <p className="max-w-lg text-base leading-7 text-slate-300">
            Take the first step toward your pilot certificate. Schedule a
            discovery flight with one of our instructors today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-luxaire-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600"
          >
            Schedule a Discovery Flight
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <p className="text-sm text-slate-400">
            Or call us at{" "}
            <a href={siteConfig.phoneHref} className="text-luxaire-400 hover:text-luxaire-300">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
