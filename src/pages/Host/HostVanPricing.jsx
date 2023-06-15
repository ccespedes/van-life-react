import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const van = useOutletContext();
  return (
    <div className="host-van-price">
      <h2>
        ${van.price}
        <span>/day</span>
      </h2>
      <p>{van.description}</p>
    </div>
  );
}
