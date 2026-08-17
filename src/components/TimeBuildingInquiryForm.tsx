"use client";

import { useState, type FormEvent } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { TIME_BUILDING_ENDPOINT as FORMSPREE_ENDPOINT } from "@/lib/formspree";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AIRCRAFT_OPTIONS = ["Cessna 172", "Cessna 150"];

const LICENSE_OPTIONS = [
  "Student Pilot",
  "Private Pilot",
  "Instrument Rating",
  "Commercial Pilot",
];

type FormValues = {
  aircraft: string;
  totalHours: string;
  license: string;
  availability: string;
  name: string;
  email: string;
  phone: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  aircraft: "",
  totalHours: "",
  license: "",
  availability: "",
  name: "",
  email: "",
  phone: "",
};

const inputClasses =
  "w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-navy-900 placeholder:text-slate-400 focus:border-luxaire-500 focus:outline-none focus:ring-1 focus:ring-luxaire-500";

const errorInputClasses = "border-red-400 focus:border-red-500 focus:ring-red-500";

const groupHeadingClasses =
  "text-xs font-semibold uppercase tracking-wider text-slate-400";

export default function TimeBuildingInquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (response.ok) {
        setStatus("success");
        setValues(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-luxaire-300 bg-luxaire-500/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-navy-900">
          Thanks — we&apos;ll be in touch soon!
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          We received your time building inquiry and will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot field for basic spam protection — real users never fill this in */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value="Time Building Inquiry" />

      {/* Aircraft & Experience */}
      <div className="flex flex-col gap-4">
        <p className={groupHeadingClasses}>Aircraft &amp; Experience</p>

        <div>
          <span className="text-sm font-medium text-navy-900">
            Aircraft checkout requested{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </span>
          <div className="mt-1.5 grid grid-cols-2 gap-3">
            {AIRCRAFT_OPTIONS.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  values.aircraft === option
                    ? "border-luxaire-500 bg-luxaire-500/10 text-luxaire-700"
                    : "border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
              >
                <input
                  type="radio"
                  name="aircraft"
                  value={option}
                  checked={values.aircraft === option}
                  onChange={(e) => updateField("aircraft", e.target.value)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="totalHours"
            className="text-sm font-medium text-navy-900"
          >
            Total flight hours{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="totalHours"
            name="totalHours"
            type="number"
            min="0"
            inputMode="numeric"
            value={values.totalHours}
            onChange={(e) => updateField("totalHours", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </div>

        <div>
          <label htmlFor="license" className="text-sm font-medium text-navy-900">
            Licenses/certificates earned{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <select
            id="license"
            name="license"
            value={values.license}
            onChange={(e) => updateField("license", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            <option value="">Select one</option>
            {LICENSE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-4">
        <p className={groupHeadingClasses}>Availability</p>

        <div>
          <label
            htmlFor="availability"
            className="text-sm font-medium text-navy-900"
          >
            Availability{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="availability"
            name="availability"
            type="text"
            placeholder="e.g. Weekday mornings, Flexible"
            value={values.availability}
            onChange={(e) => updateField("availability", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-4">
        <p className={groupHeadingClasses}>Contact Info</p>

        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`mt-1.5 ${inputClasses} ${errors.name ? errorInputClasses : ""}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`mt-1.5 ${inputClasses} ${errors.email ? errorInputClasses : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={`mt-1.5 ${inputClasses} ${errors.phone ? errorInputClasses : ""}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request. Please try again, or
          call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-luxaire-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-luxaire-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Inquire About Time Building"}
        {status !== "submitting" && <ChevronRightIcon className="h-4 w-4" />}
      </button>
    </form>
  );
}
