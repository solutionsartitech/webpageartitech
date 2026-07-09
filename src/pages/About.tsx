import { useDocumentTitle } from "../lib/useDocumentTitle";
import Eyebrow from "../components/Eyebrow";
import CtaBand from "../components/CtaBand";

const mvp = [
  {
    label: "MISSION",
    text: "Make dependable, well-built technology accessible to businesses of every size.",
  },
  {
    label: "VISION",
    text: "To be the technology partner our clients recommend without hesitation.",
  },
  {
    label: "PROMISE",
    text: "Honest advice, clear pricing, and support that doesn't end at launch.",
  },
];

const stats = [
  { num: "120+", label: "PROJECTS DELIVERED" },
  { num: "10 YRS", label: "IN BUSINESS" },
  { num: "98%", label: "CLIENT RETENTION" },
  { num: "24/7", label: "SUPPORT COVERAGE" },
];

const values = [
  { title: "Clarity", text: "Plain language, explicit scope, no surprises." },
  { title: "Craft", text: "We build things properly, even when nobody's checking." },
  { title: "Partnership", text: "Your goals set the direction; we bring the expertise." },
  { title: "Accountability", text: "We own outcomes, not just deliverables." },
];

export default function About() {
  useDocumentTitle("About — ARTITECH Solutions");

  return (
    <>
      <section className="page-head">
        <Eyebrow>ABOUT US</Eyebrow>
        <h1 className="page-head__title">
          The team behind <span className="accent">the technology</span>
        </h1>
        <p className="page-head__lead">
          ARTITECH Solutions is a technology partner for businesses that want
          their systems to work as hard as they do.
        </p>
      </section>

      {/* Story + MVP */}
      <section
        className="container grid grid--auto-300"
        style={{ padding: "0 24px clamp(48px, 6vw, 72px)" }}
      >
        <div className="card card--lg">
          <h2 className="story-card__title">
            Our
            <br />
            Story
          </h2>
          <p className="story-card__p">
            We started ARTITECH Solutions with a simple observation: most
            businesses don't need more technology — they need the right
            technology, implemented well. Too many projects fail not because of
            tools, but because of unclear scope, poor communication, and
            solutions designed for the vendor rather than the client.
          </p>
          <p className="story-card__p">
            A decade later, that observation still shapes how we work. We keep
            teams small and senior, scopes explicit, and communication constant.
            Our clients range from two-person startups to enterprise IT
            departments — and most have been with us for years.
          </p>
        </div>

        <div className="card--dark card--lg mvp">
          {mvp.map((m) => (
            <div key={m.label} className="mvp__block">
              <div className="mvp__label">{m.label}</div>
              <p className="mvp__text">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        className="container grid grid--auto-180"
        style={{ padding: "0 24px clamp(48px, 6vw, 72px)" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat__num">{s.num}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Values */}
      <section
        className="container section--center"
        style={{ padding: "0 24px clamp(56px, 7vw, 90px)" }}
      >
        <Eyebrow>WHAT WE VALUE</Eyebrow>
        <div
          className="grid grid--auto-220"
          style={{ marginTop: 28, textAlign: "left" }}
        >
          {values.map((v) => (
            <div key={v.title} className="card" style={{ padding: 26 }}>
              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Let's build something together." />
    </>
  );
}
