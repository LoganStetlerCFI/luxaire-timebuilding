import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Wordmark className="text-2xl" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Site
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-luxaire-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-luxaire-600" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.airport}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-luxaire-600" />
              <a href={siteConfig.phoneHref} className="hover:text-luxaire-700">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-luxaire-600" />
              <a href={siteConfig.emailHref} className="hover:text-luxaire-700">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-slate-400 sm:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
