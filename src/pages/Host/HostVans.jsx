import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vanData from "../../../vanData";

export default function HostVans() {
  const hostId = "123";
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    const vansHostData = vanData.data.vans;
    setHostVans(
      vansHostData.filter((van) => {
        return van.hostId === hostId;
      })
    );
    console.log(hostVans);
  }, []);

  const vanElements = hostVans.map((van) => (
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
      {hostVans.length > 0 ? <>{vanElements}</> : <h2>Loading...</h2>}
    </div>
  );
}
