import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import vanData from "/vanData.js";

export default function VanDetail() {
  const { id } = useParams();
  //const params = useParams();   <-- or we can use this. access via params.id
  const [van, setVan] = useState(null);

  useEffect(() => {
    setVan(vanData.data.vans[id - 1]);
  }, [id]);

  console.log(van);
  return (
    <div className="main-container">
      {van ? (
        <div className="van-detail">
          <img className="van-detail-image" src={van.imageUrl} />
          <div className={`van-type ${van.type} selected`}>{van.type}</div>
          <h1>{van.name}</h1>
          <p className="van-price">
            <span>{van.price}</span>
            /day
          </p>
          <p>{van.description}</p>
          <button className="btn hero-btn">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
