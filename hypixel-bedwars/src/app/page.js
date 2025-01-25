"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("solos");

  useEffect(() => {
    const savedGameMode = localStorage.getItem("selectedGameMode");
    if (savedGameMode) {
      setActiveTab(savedGameMode);
    }
  }, []);

  const handleTabChange = (mode) => {
    setActiveTab(mode);
    localStorage.setItem("selectedGameMode", mode);
  };

  return (
      <div className="content-container">
        <div className="tab-buttons">
          <button
              id="solosButton"
              className={`tab-button ${activeTab === "solos" ? "active" : ""}`}
              onClick={() => handleTabChange("solos")}
          >
            Solos/Doubles
          </button>
          <button
              id="threesButton"
              className={`tab-button ${activeTab === "threes" ? "active" : ""}`}
              onClick={() => handleTabChange("threes")}
          >
            3v3v3v3/4v4v4v4
          </button>
        </div>
        <div className="search-container">
          <input
              type="text"
              className="search-input"
              placeholder="Search maps..."
          />
          <button className="search-button">Search</button>
        </div>
        <p>New maps will be added soon.</p>
      </div>
  );
}