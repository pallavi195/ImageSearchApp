import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSearch = async () => {
    if (!term.trim()) return;

    try {
      const res = await axios.post("http://localhost:5000/api/search", {
        term,
        userId: "demoUser", // Replace with actual user id after OAuth
      });
      setImages(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching images. Check server connection.");
    }
  };

  const toggleSelect = (img) => {
    if (selected.includes(img)) {
      setSelected(selected.filter((i) => i !== img));
    } else {
      setSelected([...selected, img]);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🔍 Image Search</h2>

      <div>
        <input
          type="text"
          placeholder="Search for images..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button
          onClick={handleSearch}
          style={{ marginLeft: "10px", padding: "8px 20px" }}
        >
          Search
        </button>
      </div>

      <h4 style={{ marginTop: "20px" }}>
        Selected: {selected.length} images
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginTop: "20px",
          padding: "0 30px",
        }}
      >
        {images.map((img) => (
          <div key={img.id} style={{ position: "relative" }}>
            <img
              src={img.urls.small}
              alt={img.alt_description}
              style={{
                width: "100%",
                borderRadius: "10px",
                border: selected.includes(img) ? "4px solid #007bff" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleSelect(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
