import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="main-container">
      <h1>Error: {error.message}</h1>
      <pre>
        {error.statusText} - {error.status}
      </pre>
    </div>
  );
}
