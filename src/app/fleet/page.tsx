import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "The owner-operated, in-house maintained aircraft fleet at Luxaire Center in DeLand, FL — a Cessna 172 and two Cessna 150s.",
};

const cessna172 = {
  tailNumber: "N84582",
  heroImage: {
    src: "/fleet-images/172-N84582-exterior-main.jpg",
    alt: "Cessna 172 N84582 parked on the ramp",
  },
  gallery: [
    {
      src: "/fleet-images/172-N84582-avionics.jpg",
      alt: "Dual glass cockpit avionics in Cessna 172 N84582",
      caption: "Dual glass cockpit",
    },
    {
      src: "/fleet-images/172-N84582-interior-seats.jpg",
      alt: "Custom Luxaire-embroidered leather seats in Cessna 172 N84582",
      caption: "Custom Luxaire interior",
    },
  ],
};

const cessna150s = [
  {
    tailNumber: "N63424",
    src: "/fleet-images/150-N63424-ramp-sunny.jpg",
    alt: "Cessna 150 N63424 parked on the ramp under a blue sky",
  },
  {
    tailNumber: "N5785E",
    src: "/fleet-images/150-N5785E-nose-on.jpg",
    alt: "Nose-on view of Cessna 150 N5785E on the ramp",
  },
];

const rateGroups = [
  {
    aircraft: "Cessna 172",
    rates: [
      { label: "Time Building Rate", value: "$70/hr", sub: "Per person" },
      {
        label: "Training Rate",
        value: "$180/hr",
        sub: "$140/hr aircraft + $40/hr instructor",
      },
    ],
  },
  {
    aircraft: "Cessna 150",
    rates: [
      { label: "Time Building Rate", value: "$48/hr", sub: "Per person" },
      {
        label: "Training Rate",
        value: "$145/hr",
        sub: "$105/hr aircraft + $40/hr instructor",
      },
    ],
  },
];

export default function FleetPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Our Fleet"
        title="The Aircraft We Fly"
        description="We own every aircraft in our fleet outright and maintain it with our own in-house team — a Cessna 172 and two Cessna 150s, with more on the way."
      />

      {/* Aircraft */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        {/* Cessna 172 — flagship */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="relative aspect-[1600/738] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(cessna172.heroImage.src)}
              alt={cessna172.heroImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900">
              Cessna 172 · {cessna172.tailNumber}
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {cessna172.gallery.map((image) => (
                <div key={image.src}>
                  <div className="relative aspect-[1600/739] w-full overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(image.src)}
                      alt={image.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cessna 150s — uniform, smaller cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {cessna150s.map((plane) => (
            <div
              key={plane.tailNumber}
              className="overflow-hidden rounded-lg border border-slate-200"
            >
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(plane.src)}
                  alt={plane.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-navy-900">
                  Cessna 150 · {plane.tailNumber}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
            Rates
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Rental &amp; Training Rates
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            All rates are wet (fuel included).
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {rateGroups.map((group) => (
              <div
                key={group.aircraft}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-navy-900">
                  {group.aircraft}
                </h3>
                <dl className="mt-4 flex flex-col gap-3">
                  {group.rates.map((rate) => (
                    <div
                      key={rate.label}
                      className="border-t border-slate-100 pt-3 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-slate-600">{rate.label}</dt>
                        <dd className="text-sm font-semibold text-navy-900">
                          {rate.value}
                        </dd>
                      </div>
                      {rate.sub && (
                        <p className="mt-0.5 text-xs text-slate-400">
                          {rate.sub}
                        </p>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
            You&apos;re welcome to rent or train solo or with a friend. If
            you sign up solo, we&apos;ll pair you with another pilot.
          </p>
        </div>
      </section>
    </div>
  );
}
