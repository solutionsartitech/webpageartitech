import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import Arrow from "../components/Arrow";
import Eyebrow from "../components/Eyebrow";
import Globe from "../components/Globe";

const trustedBy = [
  {
    name: "RJL RICEMILL CORP.",
    stat: "+38%",
    label: "Operational efficiency",
    trend: [22, 30, 27, 42, 38, 55, 64, 78],
  },
  {
    name: "XAVI HARDWARE",
    stat: "+46%",
    label: "Inventory accuracy",
    trend: [18, 24, 33, 29, 47, 52, 61, 82],
  },
];

function sparklinePoints(values: number[], w = 96, h = 30) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * (h - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

const shifts = [
  {
    tag: "SETUP",
    problem: "Endless scripts and manual setup",
    solution: "Tell us what you need — we handle the rest",
  },
  {
    tag: "SECURITY",
    problem: "No built-in security or data governance",
    solution: "Governance that enforces data and usage policies",
  },
  {
    tag: "WORKFLOW",
    problem: "Fragmented workflows between teams",
    solution: "Deployed automatically to secure cloud environments",
  },
  {
    tag: "TESTING",
    problem: "Slow testing and unreliable deployments",
    solution: "Production-ready systems, tested before launch",
  },
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
    title: "Mobile Application Development",
    text: "Build fast, responsive, and user-friendly mobile applications tailored to your business needs.",
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
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Technology built to think,
              <br />
              <span className="accent">adapt, and scale with you</span>
            </h1>
            <p className="hero__lead">
              ARTITECH designs, builds, and manages the software, cloud, and
              data systems that startups and enterprises rely on.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn btn--dark">
                TALK TO AN EXPERT <Arrow />
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__facet hero__facet--a" />
            <div className="hero__facet hero__facet--b" />
            <div className="hero__radar" />
            <div className="hero__radar hero__radar--delay" />
            <div className="hero__orbit hero__orbit--a">
              <span className="hero__orbit-dot" />
            </div>
            <div className="hero__orbit hero__orbit--b">
              <span className="hero__orbit-dot" />
            </div>
            <Globe speed={5} />
            <img src="/logo-mark.png" alt="" className="hero__spin-mark" />

            <div className="hero__chip hero__chip--stat">
              <span className="hero__chip-label">UPTIME SLA</span>
              <span className="hero__chip-value">99.9%</span>
            </div>
            <div className="hero__chip hero__chip--badge">✓</div>
            <div className="hero__chip hero__chip--support">
              <span className="hero__chip-label">SUPPORT</span>
              <span className="hero__chip-value">100%</span>
            </div>
            <div className="hero__chip hero__chip--cost">
              <span className="hero__chip-icon hero__chip-icon--cost" aria-hidden="true">
                $
              </span>
              LOW PRICING
            </div>
            <div className="hero__chip hero__chip--partners">
              <span className="hero__chip-icon hero__chip-icon--partners" aria-hidden="true">
                ★
              </span>
              PERKS
            </div>
          </div>
        </div>

        <div className="trusted">
          <div className="trusted__map" aria-hidden="true" />
          <div className="trusted__live">
            <span className="trusted__live-dot" /> LIVE MONITORING
          </div>
          <div className="trusted__label">
            <span className="eyebrow__dot" /> TRUSTED BY BUSINESSES WORLDWIDE
          </div>
          <div className="trusted__grid">
            {trustedBy.map((c, i) => (
              <div key={c.name} className="trusted-card">
                <div className="trusted-card__top">
                  <span className="trusted-card__name">{c.name}</span>
                  <span className="trusted-card__stat">{c.stat}</span>
                </div>
                <svg
                  className="trusted-card__spark"
                  viewBox="0 0 96 30"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id={`trusted-spark-${i}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#0f78d9" />
                      <stop offset="100%" stopColor="#3fe0fa" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points={sparklinePoints(c.trend)}
                    fill="none"
                    stroke={`url(#trusted-spark-${i})`}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="trusted-card__metric">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section section--center section--tech-a">
        <Eyebrow>PROBLEM &amp; SOLUTION</Eyebrow>
        <h2 className="section-title" style={{ maxWidth: 640 }}>
          Eliminate the Chaos of Ad-hoc IT
        </h2>
        <p className="section-sub" style={{ maxWidth: 420 }}>
          ARTITECH takes on the complex layers of building and running technology
          — from architecture to security — so your team doesn't have to.
        </p>
        <p className="ps-proof">
          Proven in production —{" "}
          <span className="ps-proof__stat">+38% efficiency</span> at RJL
          Ricemill Corp. and{" "}
          <span className="ps-proof__stat">+46% accuracy</span> at Xavi
          Hardware.
        </p>

        <div className="grid grid--auto-300 grid--wide ps-shift">
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
              {shifts.map((s) => (
                <div key={s.tag} className="ps-item ps-item--light">
                  <span className="ps-tag ps-tag--light">{s.tag}</span>
                  {s.problem}
                </div>
              ))}
            </div>
          </div>

          <div className="ps-shift__arrow" aria-hidden="true">
            →
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
              {shifts.map((s) => (
                <div key={s.tag} className="ps-item ps-item--dark">
                  <span className="ps-tag ps-tag--dark">{s.tag}</span>
                  {s.solution}
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
