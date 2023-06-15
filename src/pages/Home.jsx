import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-title">
            You got BIG travel plans, we got the travel vans.
          </div>
          <div className="hero-text">
            Add adventure to your life by joining the #vanlife movement.
            <br />
            Rent the perfect van to make your perfect road trip.
          </div>
          <Link to="/vans" className="btn hero-btn">
            Find your van
          </Link>
        </div>
      </div>
    </>
  );
}
