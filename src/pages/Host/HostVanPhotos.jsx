import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const van = useOutletContext();
  return (
    <div className="host-van-photos">
      <img src={van.imageUrl} />
      <p>{van.description}</p>
    </div>
  );
}
