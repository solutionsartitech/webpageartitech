import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "HOME", end: true },
  { to: "/services", label: "SERVICES", end: false },
  { to: "/about", label: "ABOUT", end: false },
  { to: "/contact", label: "CONTACT", end: false },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                isActive ? "nav__link is-active" : "nav__link"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="nav__brand">
          <img src="/logo-mark.png" alt="ARTITECH logo" className="nav__mark" />
          <span className="nav__wordmark">ARTITECH</span>
        </Link>

        <div className="nav__actions">
          <Link to="/contact" className="btn btn--ghost">
            SIGN IN
          </Link>
          <Link to="/contact" className="btn btn--dark-sm">
            TALK TO US
          </Link>
        </div>
      </div>
    </header>
  );
}
