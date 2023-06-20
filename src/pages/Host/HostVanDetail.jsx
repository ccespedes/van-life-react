import { Outlet } from "react-router";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getVans(params.id);
}

export default function HostVanDetail() {
  const van = useLoaderData();

  const activeStyles = {
    textDecoration: "underline",
    color: "#161616",
    fontWeight: "600",
  };

  return (
    <div>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-container">
        <div className="host-van-detail-top">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h2>{van.name}</h2>
            <h3>
              ${van.price}
              <span>/day</span>
            </h3>
          </div>
        </div>
        <div className="host-van-detail-data">
          <div className="host-menu mt mb">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </div>
          <Outlet context={van} />
        </div>
      </div>
    </div>
  );
}
