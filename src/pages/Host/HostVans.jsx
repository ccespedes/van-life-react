import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader() {
  await requireAuth();
  return getVans();
}

export default function HostVans() {
  const vans = useLoaderData();

  const vanElements = vans.map((van) => (
    <div key={van.id} className="host-van-tile">
      <img src={van.imageUrl} />
      <div className="host-van-tile-info">
        <h3>{van.name}</h3>
        <p>{van.price}/day</p>
      </div>
      <Link to={van.id} className="btn host-van-tile-button">
        Edit
      </Link>
    </div>
  ));

  return (
    <div className="host-van-container">
      <h1>Your listed vans</h1>
      <div>View All</div>
      {vans.length > 0 ? <>{vanElements}</> : <h2>Loading...</h2>}
    </div>
  );
}
