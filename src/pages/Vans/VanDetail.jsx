import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="main-container">
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
    </div>
  );
}
