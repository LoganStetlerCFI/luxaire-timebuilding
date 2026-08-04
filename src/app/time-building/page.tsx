import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";
import {
  ChevronRightIcon,
  ClockIcon,
  KeyIcon,
  PlaneIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Time Building",
  description:
    "Affordable aircraft rental for time building at Luxaire Center in DeLand, FL — check out, then fly as much as you want.",
};

const steps = [
  {
    name: "Complete a Checkout",
    icon: KeyIcon,
    description:
      "Every renter completes an aircraft checkout with one of our instructors before renting solo.",
  },
  {
    name: "Rent & Fly",
    icon: ClockIcon,
    description:
      "Once checked out, rent our aircraft on a wet-rental basis and fly as much as you want, whenever you want.",
  },
];

export default function TimeBuildingPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Time Building"
        title="Check out once. Fly affordable hours at your pace."
      />

      {/* What is Time Building */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
          Time Building, Simplified
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Build hours on your own schedule
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Once you complete an aircraft checkout with one of our instructors,
          you&apos;re free to rent our fleet and fly as much as you&apos;d
          like. It&apos;s an affordable way for our students to build hours
          at any point during their training — and it&apos;s open to renters
          beyond our student body as well.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Two steps to affordable time building
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div
                key={step.name}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-900">
                  <step.icon className="h-5 w-5 text-luxaire-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {i + 1}. {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-navy-900">
            <PlaneIcon className="h-7 w-7 text-luxaire-400" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900">
              The Same Trusted Fleet
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Rent from our owner-operated fleet — a Cessna 172 and two
              Cessna 150s, with more aircraft on the way. Rentals are wet
              (fuel included).
            </p>
            <Link
              href="/fleet"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-800 hover:text-luxaire-700"
            >
              View our fleet
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6">
          <p className="text-sm leading-6 text-slate-500">
            Wet rental rates are coming soon.{" "}
            <Link
              href="/contact"
              className="font-semibold text-luxaire-700 hover:text-luxaire-600"
            >
              Contact us
            </Link>{" "}
            for current pricing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-8">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start building time?
          </h2>
          <p className="max-w-lg text-base leading-7 text-slate-300">
            Reach out to schedule your checkout and start flying on your own
            schedule.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-luxaire-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600"
          >
            Inquire About Time Building
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <p className="text-sm text-slate-400">
            Or call us at{" "}
            <a
              href={siteConfig.phoneHref}
              className="text-luxaire-400 hover:text-luxaire-300"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
