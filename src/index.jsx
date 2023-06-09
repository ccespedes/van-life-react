import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//import "./server";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
