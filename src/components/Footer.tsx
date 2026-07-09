import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "HOME" },
  { to: "/services", label: "SERVICES" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo-mark.png" alt="" className="footer__mark" />
          <span className="footer__wordmark">ARTITECH</span>
        </div>
        <nav className="footer__links">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="footer__link">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="footer__copy">© 2026 ARTITECH SOLUTIONS</div>
      </div>
    </footer>
  );
}
