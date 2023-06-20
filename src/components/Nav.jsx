import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        #VANLIFE
      </Link>
      <menu className="nav-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="login"
        >
          Login
        </NavLink>
      </menu>
    </nav>
  );
}
