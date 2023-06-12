import { useState, useEffect } from "react";
import { useParams } from "react-router";
import vanData from "../../../vanData";

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVanData] = useState([]);

  useEffect(() => {
    setVanData(vanData.data.vans[id - 1]);
  }, []);
  console.log(van);

  //const vanElements =

  return (
    <div className="host-van-detail-container">
      <div className="host-van-detail-top">
        <img src={van.imageUrl} />
        <div className="host-van-detail-info">
          <div className={`van-type ${van.type} selected`}>{van.type}</div>
          <h2>{van.name}</h2>
          <h3>
            ${van.price}
            <span>/day</span>
          </h3>
        </div>
      </div>
      <p>
        <span>Name:</span> {van.name}
      </p>
      <p>
        <span>Category:</span> {van.name}
      </p>
      <p>
        <span>Description:</span> {van.description}
      </p>
      <p>
        <span>Visibility:</span> Public
      </p>
    </div>
  );
}
