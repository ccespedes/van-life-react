import { useState, useEffect } from "react";

export default function Vans() {
  const [vans, setVans] = useState([]);
  //const vans = [];
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  //console.log(vans);
  return <h1>Vans page goes here 🚐</h1>;
}
