import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScheduleDiscoveryFlightButton from "@/components/ScheduleDiscoveryFlightButton";
import TimeBuildingInquiryButton from "@/components/TimeBuildingInquiryButton";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Luxaire Center in DeLand, FL — phone, address, and how to reach us.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Reach out with any questions, or schedule a discovery flight to get started."
        align="center"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-20 text-center sm:px-8">
        <ul className="flex flex-col items-center gap-4 text-base text-slate-600">
          <li className="flex items-start gap-2">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-luxaire-600" />
            <span>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.airport}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 shrink-0 text-luxaire-600" />
            <a href={siteConfig.phoneHref} className="hover:text-luxaire-700">
              {siteConfig.phone}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 shrink-0 text-luxaire-600" />
            <a href={siteConfig.emailHref} className="hover:text-luxaire-700">
              {siteConfig.email}
            </a>
          </li>
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ScheduleDiscoveryFlightButton className="inline-flex items-center gap-2 rounded-md bg-luxaire-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600" />
          <TimeBuildingInquiryButton className="inline-flex items-center gap-2 rounded-md border border-luxaire-600 px-6 py-3 text-sm font-semibold text-luxaire-700 transition-colors hover:bg-luxaire-700 hover:text-white" />
        </div>
      </section>
    </div>
  );
}
