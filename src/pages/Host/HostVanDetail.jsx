import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVanData] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

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
