import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="main-container">
      <div className="back-container">
        <h1>Sorry, the page you were looking for was not found</h1>
        <Link to="." className="btn explore-btn">
          Back to home
        </Link>
      </div>
    </div>
  );
}
