import { useState } from "react";
import type { FormEvent } from "react";
import { useDocumentTitle } from "../lib/useDocumentTitle";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (!f.name.trim()) errors.name = "Please enter your name";
  if (!f.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
    errors.email = "Please enter a valid email";
  }
  if (!f.message.trim()) errors.message = "Please tell us what you need help with";
  return errors;
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined;

export default function Contact() {
  useDocumentTitle("Contact — ARTITECH Solutions");

  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    if (!FORMSPREE_ENDPOINT) {
      setSubmitError(
        "This form isn't connected to an email endpoint yet. Set VITE_FORMSPREE_ENDPOINT to enable sending.",
      );
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          company: fields.company,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
          _replyto: fields.email,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your message. Please email us directly at solutions.artitech@gmail.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
    setSent(false);
    setSubmitError("");
  };

  return (
    <>
      <section className="page-head">
        <div className="eyebrow" style={{ marginBottom: 0 }}>
          <span className="eyebrow__dot" /> CONTACT
        </div>
        <h1 className="page-head__title">
          Let's talk about <span className="accent">your project</span>
        </h1>
        <p className="page-head__lead">
          Tell us about your project or challenge. We'll respond within one
          business day — no obligation, no sales pressure.
        </p>
      </section>

      <section
        className="container grid grid--auto-300"
        style={{ padding: "0 24px clamp(56px, 7vw, 90px)", alignItems: "start" }}
      >
        {/* Contact details */}
        <div className="contact-info">
          <div className="contact-info__block">
            <div className="contact-info__label">EMAIL</div>
            <div className="contact-info__value">solutions.artitech@gmail.com</div>
          </div>
          <div className="contact-info__block">
            <div className="contact-info__label">PHONE</div>
            <div className="contact-info__value">+639 9739 73887</div>
          </div>
          <div className="contact-info__block">
            <div className="contact-info__label">HOURS</div>
            <div className="contact-info__value">Monday–Friday, 9:00–18:00</div>
          </div>
          <div className="contact-info__note">
            Prefer email? Write to us directly and we'll set up a call at a time
            that suits you.
          </div>
        </div>

        {/* Form / success */}
        <div className="form-panel">
          {sent ? (
            <div className="form-success">
              <div className="form-success__badge">✓</div>
              <h3 className="form-success__title">Thank you.</h3>
              <p className="form-success__text">
                We've received your request and will be in touch within one
                business day.
              </p>
              <button type="button" className="btn--reset" onClick={reset}>
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <Field
                  label="FULL NAME"
                  placeholder="Jane Smith"
                  value={fields.name}
                  onChange={update("name")}
                  error={errors.name}
                />
                <Field
                  label="COMPANY"
                  placeholder="Acme Inc."
                  value={fields.company}
                  onChange={update("company")}
                />
              </div>
              <div className="form__row">
                <Field
                  label="WORK EMAIL"
                  type="email"
                  placeholder="jane@acme.com"
                  value={fields.email}
                  onChange={update("email")}
                  error={errors.email}
                />
                <Field
                  label="PHONE (OPTIONAL)"
                  placeholder="+1 (555) 000-0000"
                  value={fields.phone}
                  onChange={update("phone")}
                />
              </div>
              <div className="field">
                <label className="field__label">
                  WHAT DO YOU NEED HELP WITH?
                </label>
                <textarea
                  className={
                    errors.message
                      ? "field__textarea field__textarea--invalid"
                      : "field__textarea"
                  }
                  placeholder="Tell us about your project, timeline, and goals"
                  rows={6}
                  value={fields.message}
                  onChange={update("message")}
                />
                {errors.message && (
                  <span className="field__error">{errors.message}</span>
                )}
              </div>
              {submitError && (
                <span className="field__error">{submitError}</span>
              )}
              <button type="submit" className="btn btn--block" disabled={submitting}>
                {submitting ? "SENDING…" : "TALK TO AN EXPERT →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <input
        className={error ? "field__input field__input--invalid" : "field__input"}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
