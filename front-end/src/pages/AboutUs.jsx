import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutUs() {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/api/about")
      .then(res => setAbout(res.data))
      .catch(err => setError(err?.message || "Failed to load"));
  }, []);

  if (error) return <div style={{ padding: 16, color: "red" }}>Error: {error}</div>;
  if (!about) return <div style={{ padding: 16 }}>Loading...</div>;

  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: "0 16px" }}>
      <h1>About Us</h1>
      <h2 style={{ marginTop: 8 }}>{about.name}</h2>
      <p><em>{about.tagline}</em></p>
      {about.photoUrl && (
        <img
          src={about.photoUrl}
          alt="Profile"
          style={{ maxWidth: "100%", borderRadius: 12, margin: "16px 0" }}
        />
      )}
      {Array.isArray(about.paragraphs) && about.paragraphs.map((p, i) => (
        <p key={i} style={{ lineHeight: 1.6 }}>{p}</p>
      ))}
    </div>
  );
}
