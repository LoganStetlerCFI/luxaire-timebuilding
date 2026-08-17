"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { CloseIcon, MenuIcon } from "@/components/icons";
import Wordmark from "@/components/Wordmark";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Wordmark className="text-2xl sm:text-3xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-luxaire-700"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-col items-end gap-0.5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-slate-600 hover:text-navy-900"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.emailHref}
            className="text-xs font-medium text-slate-500 hover:text-navy-900"
          >
            {siteConfig.email}
          </a>
        </div>

        <button
          type="button"
          className="text-navy-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-slate-100 text-luxaire-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 flex flex-col gap-1 border-t border-slate-200 pt-3">
              <a
                href={siteConfig.phoneHref}
                className="block px-3 py-1 text-sm font-medium text-slate-600"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="block px-3 py-1 text-sm font-medium text-slate-600"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
