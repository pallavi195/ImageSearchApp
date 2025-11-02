import React from "react";

function SearchResults() {
  const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&q=60",
];


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Search Results</h2>
      <p>Select multiple images by clicking them.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Result ${i}`}
            style={{
              width: "200px",
              height: "150px",
              borderRadius: "10px",
              cursor: "pointer",
              border: "2px solid #ccc",
            }}
            onClick={(e) =>
              (e.target.style.border =
                e.target.style.border === "4px solid green" ? "2px solid #ccc" : "4px solid green")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
