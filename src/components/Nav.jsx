import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        #VANLIFE
      </Link>
      <menu className="nav-menu">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </menu>
    </nav>
  );
}
