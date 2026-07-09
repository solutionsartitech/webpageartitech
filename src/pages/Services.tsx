import { useDocumentTitle } from "../lib/useDocumentTitle";
import CtaBand from "../components/CtaBand";

const services = [
  {
    num: "01",
    title: "Custom Software Development",
    text: "Web and mobile applications tailored to your workflows — from internal tools to customer-facing products. Clean architecture, automated testing, and documentation your team can build on.",
    tags: ["WEB APPS", "MOBILE", "API INTEGRATION"],
  },
  {
    num: "02",
    title: "Cloud & Infrastructure",
    text: "Migration planning, cloud architecture, and ongoing management on AWS, Azure, or Google Cloud. Optimised for security, reliability, and cost — no surprises.",
    tags: ["MIGRATION", "DEVOPS", "COST CONTROL"],
  },
  {
    num: "03",
    title: "IT Consulting & Strategy",
    text: "Technology decisions with business context. We audit your current systems, identify risks and quick wins, and deliver a roadmap leadership can act on with confidence.",
    tags: ["AUDITS", "TRANSFORMATION", "ROADMAPS"],
  },
  {
    num: "04",
    title: "Data & Analytics",
    text: "Data pipelines, warehousing, and reporting dashboards that give every team a clear view of what's working. Trustworthy first, then useful.",
    tags: ["DASHBOARDS", "PIPELINES", "BI"],
  },
  {
    num: "05",
    title: "Managed IT Support",
    text: "Proactive monitoring, help desk, and maintenance under a clear SLA. Responsive support for your team, predictable costs for your leadership.",
    tags: ["HELP DESK", "24/7 MONITORING", "SLA-BACKED"],
  },
  {
    num: "06",
    title: "E-commerce Development",
    text: "Online stores built to sell — storefronts, product catalogues, secure checkout, and payment integration, connected to your inventory and shipping workflows.",
    tags: ["ONLINE STORES", "PAYMENTS", "INVENTORY"],
  },
];

export default function Services() {
  useDocumentTitle("Services — ARTITECH Solutions");

  return (
    <>
      <section className="page-head">
        <h1 className="page-head__title">
          What we can <span className="accent">do for you</span>
        </h1>
        <p className="page-head__lead">
          End-to-end technology services for startups and enterprises —
          engagements sized to your needs, from a single audit to a fully managed
          partnership.
        </p>
      </section>

      <section
        className="container grid grid--auto-300"
        style={{ padding: "0 24px clamp(56px, 7vw, 90px)" }}
      >
        {services.map((s) => (
          <div key={s.num} className="card card--service">
            <div className="card__num">{s.num}</div>
            <h2 className="card__title card__title--lg">{s.title}</h2>
            <p className="card__text" style={{ marginBottom: 18 }}>
              {s.text}
            </p>
            <div className="tags" style={{ marginTop: 0 }}>
              {s.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CtaBand title="Not sure where to start? Let's talk it through." />
    </>
  );
}
