import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
//import vanData from "/vanData.js";
import { getVans } from "../../../api";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get("type");

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setVans(vanData.data.vans);
    async function loadVans() {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }
    loadVans();
    // fetch("/api/vans")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  const displayVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  const vanElements = displayVans.map((van) => (
    <Link
      key={van.id}
      to={van.id}
      state={{
        search: `${searchParams.toString()}`,
        type: filterType,
      }}
    >
      <div className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info-text">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="main-container">
      <h1>Explore our van options</h1>
      <div className="van-type-filter-btns">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            filterType === "simple" ? "selected" : null
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${
            filterType === "luxury" ? "selected" : null
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${
            filterType === "rugged" ? "selected" : null
          }`}
        >
          Rugged
        </button>
        {filterType ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            Clear filters
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="van-container">{vanElements}</div>
    </div>
  );
}
