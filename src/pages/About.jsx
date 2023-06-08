import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <img className="about-image" src="./images/about-image.png"></img>
      <div className="main-container">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-explore">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link to="/vans" className="btn explore-btn">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
}
