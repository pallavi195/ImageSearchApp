import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Image Search App</h1>
        <nav>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/">Home</Link> |{" "}
          <Link to="/results">Search Results</Link> |{" "}
          <Link to="/history">Search History</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
