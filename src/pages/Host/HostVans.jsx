import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

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
