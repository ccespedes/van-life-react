import { useState, useEffect } from "react";
import vanData from "/vanData.js";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    setVans(vanData.data.vans);
    // fetch("/api/vans")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  const vanElements = vans.map((van) => (
    <Link key={van.id} to={`/vans/${van.id}`}>
      <div className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info-text">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <div className={`van-type ${van.type} selected`}>{van.type}</div>
      </div>
    </Link>
  ));

  console.log(vans);
  return (
    <div className="main-container">
      <h1>Explore our van options</h1>
      <div className="van-container">{vanElements}</div>
    </div>
  );
}
