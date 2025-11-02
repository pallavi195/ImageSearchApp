import React from "react";

function History() {
  const searches = ["Nature", "Cars", "Mountains", "Animals", "Flowers"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Search History</h2>
      <p>Your previously searched terms:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {searches.map((term, i) => (
          <li
            key={i}
            style={{
              margin: "8px 0",
              padding: "10px",
              border: "1px solid #ddd",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "8px",
            }}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;  
