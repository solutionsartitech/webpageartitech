import { Link } from "react-router-dom";
import Arrow from "./Arrow";

export default function CtaBand({ title }: { title: string }) {
  return (
    <section className="cta">
      <h2 className="cta__title">{title}</h2>
      <div className="cta__actions">
        <Link to="/contact" className="btn btn--light">
          TALK TO AN EXPERT <Arrow />
        </Link>
      </div>
    </section>
  );
}
