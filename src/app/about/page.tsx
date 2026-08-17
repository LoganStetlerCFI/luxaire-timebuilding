import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { UsersIcon } from "@/components/icons";
import ScheduleDiscoveryFlightButton from "@/components/ScheduleDiscoveryFlightButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Luxaire Center, our mission, and the instructors who make it happen.",
};

const programs = [
  {
    name: "Private Pilot Certificate",
    description:
      "Your gateway to aviation. The Private Pilot Certificate gives you the freedom to fly yourself and passengers for personal travel and recreation. Training combines hands-on flight lessons with ground instruction covering aerodynamics, regulations, weather, and navigation.",
  },
  {
    name: "Instrument Rating",
    description:
      "Take your flying to the next level. An Instrument Rating trains you to fly by reference to instruments alone, allowing you to operate safely and legally in clouds and reduced visibility. This rating sharpens your precision and expands your safety margin as a pilot.",
  },
  {
    name: "Commercial Pilot Certificate",
    description:
      "Turn your passion into a profession. The Commercial Pilot Certificate is the credential required to be paid for your flying. Training builds on your private and instrument foundations with advanced maneuvers and operational knowledge.",
  },
];

const team = [
  {
    name: "Monte Zerbe",
    role: "Owner, Flight Instructor",
    credentials: "Commercial Pilot ASEL, AMEL, CFI, CFII, ATP",
    bio: "A lifelong aviation practitioner, Monte has been a flight instructor since 1968. His flying experience spans everything from the Aeronca Champion 7AC to the Douglas DC-8-73, and he holds a degree in aviation engineering from Western Michigan University. Monte loves flying and sharing his passion for aviation with the next generation of pilots.",
    placeholder: false,
  },
  {
    name: "Logan Stetler",
    role: "Chief Flight Instructor",
    credentials: "Commercial Pilot ASEL, AMEL, CFI, CFII, MEI, AGI",
    bio: "Logan is a passionate flight instructor dedicated to personalized instruction — no matter your experience level, he'll work with you to meet your specific goals. Safety- and proficiency-focused, Logan makes sure you have every skill you need to pass your checkride on the first try.",
    placeholder: false,
  },
  {
    name: "Instructor Name",
    role: "Flight Instructor",
    credentials: "",
    bio: "Bio coming soon.",
    placeholder: true,
  },
  {
    name: "Instructor Name",
    role: "Flight Instructor",
    credentials: "",
    bio: "Bio coming soon.",
    placeholder: true,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero title="About Luxaire Center" align="center" />

      {/* Our Story */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
          Our Story
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Personalized, Passionate Flight Instruction
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We are ready to provide you with the highest quality instruction in
          a well maintained fleet. We started out doing aircraft maintenance
          and over the years have acquired a training fleet, and passionate
          flight instructors who are ready to personally work with you to
          achieve your aviation goals.
        </p>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
          Our Programs
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-900">
          Flight Training Programs
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="text-base font-semibold text-navy-900">
                {program.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ScheduleDiscoveryFlightButton className="inline-flex items-center gap-2 rounded-md bg-luxaire-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Focused on your success and safety
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Luxaire Center, we focus solely on the success and safety of our
            students. From the beginning, our instructors build
            individualized training plans that adapt over time to each
            student&apos;s progress. We provide in-house ground study
            alongside flight training to ensure every student is well
            prepared going into every checkride.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxaire-700">
            Meet the Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            The people behind your training
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {team.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className={`flex gap-5 rounded-lg border border-slate-200 p-6 ${
                member.placeholder ? "border-dashed" : ""
              }`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900">
                {member.placeholder ? (
                  <UsersIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <span className="text-base font-semibold text-luxaire-400">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    member.placeholder ? "text-slate-400" : "text-navy-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-luxaire-700">
                  {member.role}
                  {member.credentials ? ` · ${member.credentials}` : ""}
                </p>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    member.placeholder ? "text-slate-400 italic" : "text-slate-600"
                  }`}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
