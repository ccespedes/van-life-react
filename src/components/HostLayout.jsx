import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div className="main-container">
      <div className="host-menu">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
