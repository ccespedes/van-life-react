import { useState, useEffect } from "react";
import vanData from "/vanData.js";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    setVans(vanData.data.vans);
    // fetch("/api/vans")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info-text">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <div className={`van-type ${van.type} selected`}>{van.type}</div>
    </div>
  ));

  console.log(vans);
  return (
    <div className="main-container">
      <h1>Explore our van options</h1>
      <div className="van-container">{vanElements}</div>
    </div>
  );
}
