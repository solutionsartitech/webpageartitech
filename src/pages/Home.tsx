import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import Arrow from "../components/Arrow";
import Eyebrow from "../components/Eyebrow";
import Globe from "../components/Globe";

const trustedBy = ["RJL MILLING CORP.", "XAVI HARDWARE"];

const problems = [
  "Endless scripts and manual setup",
  "No built-in security or data governance",
  "Fragmented workflows between teams",
  "Slow testing and unreliable deployments",
];

const solutions = [
  "Tell us what you need — we handle the rest",
  "Production-ready systems, tested before launch",
  "Deployed automatically to secure cloud environments",
  "Governance that enforces data and usage policies",
];

const services = [
  {
    num: "01",
    title: "Custom Software Development",
    text: "Web and mobile applications engineered for your workflows, built to scale with your business.",
  },
  {
    num: "02",
    title: "Cloud & Infrastructure",
    text: "Migration, architecture, and management on modern cloud platforms — secure and cost-efficient.",
  },
  {
    num: "03",
    title: "Cybersecurity",
    text: "Assessments, monitoring, and hardening to protect your data, customers, and reputation.",
  },
  {
    num: "04",
    title: "Data & Analytics",
    text: "Pipelines, warehousing, and dashboards that turn raw data into better decisions.",
  },
  {
    num: "05",
    title: "IT Consulting & Strategy",
    text: "Audits, roadmaps, and technology decisions grounded in business context.",
  },
  {
    num: "06",
    title: "Managed IT Support",
    text: "Proactive monitoring and SLA-backed support so your team stays focused on the work.",
  },
];

export default function Home() {
  useDocumentTitle(
    "ARTITECH Solutions — Technology built to think, adapt, and scale",
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero__title">
          Technology built to think,
          <br />
          <span className="accent">adapt, and scale with you</span>
        </h1>
        <p className="hero__lead">
          ARTITECH designs, builds, and manages the software, cloud, and data
          systems that startups and enterprises rely on.
        </p>
        <div className="hero__cta">
          <Link to="/contact" className="btn btn--dark">
            TALK TO AN EXPERT <Arrow />
          </Link>
        </div>

        <div className="hero__stage">
          <img src="/logo-mark.png" alt="" className="hero__watermark" />
          <Globe speed={5} />
          <div className="hero__fade" />
        </div>

        <div className="trusted">
          <div className="trusted__label">
            Trusted by <span className="accent">120+</span> businesses worldwide
          </div>
          <div className="trusted__logos">
            {trustedBy.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section section--center">
        <Eyebrow>PROBLEM &amp; SOLUTION</Eyebrow>
        <h2 className="section-title" style={{ maxWidth: 640 }}>
          Eliminate the Chaos of Ad-hoc IT
        </h2>
        <p className="section-sub" style={{ maxWidth: 420 }}>
          ARTITECH takes on the complex layers of building and running technology
          — from architecture to security — so your team doesn't have to.
        </p>

        <div className="grid grid--auto-300 grid--wide">
          <div className="card card--lg">
            <h3 className="ps-card__head" style={{ color: "var(--ink)" }}>
              The
              <br />
              Problem
            </h3>
            <p className="ps-card__sub" style={{ color: "var(--muted)" }}>
              Running business technology by hand still feels broken.
            </p>
            <div className="ps-list">
              {problems.map((p) => (
                <div key={p} className="ps-item ps-item--light">
                  <span className="ps-dot ps-dot--grey" /> {p}
                </div>
              ))}
            </div>
          </div>

          <div className="card--dark card--lg">
            <h3 className="ps-card__head" style={{ color: "var(--white)" }}>
              The
              <br />
              Solution
            </h3>
            <p className="ps-card__sub" style={{ color: "var(--navy-muted)" }}>
              A partner that builds it right — faster, safer.
            </p>
            <div className="ps-list">
              {solutions.map((s) => (
                <div key={s} className="ps-item ps-item--dark">
                  <span className="ps-dot ps-dot--blue" /> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--center">
        <Eyebrow>WHAT WE DO</Eyebrow>
        <h2 className="section-title" style={{ maxWidth: 560 }}>
          Services Built Around Your Goals
        </h2>
        <p className="section-sub" style={{ maxWidth: 420 }}>
          From first audit to fully managed partnership — all in one place.
        </p>

        <div className="grid grid--auto-280 grid--wide">
          {services.map((s) => (
            <div key={s.num} className="card">
              <div className="card__num">{s.num}</div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="hero__cta">
          <Link to="/services" className="btn btn--dark">
            LEARN MORE <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
