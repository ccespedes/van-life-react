import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    textDecoration: "underline",
    color: "#161616",
    fontWeight: "600",
  };
  return (
    <div className="main-container">
      <div className="host-menu">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
