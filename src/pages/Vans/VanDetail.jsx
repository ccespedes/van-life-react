import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  console.log(location.state.search);

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="main-container">
      {van ? (
        <div className="van-detail">
          <Link to={`..?${search}`} relative="path" className="back-button">
            &larr; <span>{`Back to ${type} vans`}</span>
          </Link>
          <img className="van-detail-image" src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h1>{van.name}</h1>
          <p className="van-price">
            <span>${van.price}</span>
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
