import React from "react";

const BuySellTabs = ({ mode, setMode }) => {
  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <button
        onClick={() => setMode("Buy")}
        style={{
          ...buttonStyle,
          backgroundColor: mode === "Buy" ? "#007BFF" : "transparent",
          color: mode === "Buy" ? "white" : "gray",
        }}
      >
        Buy
      </button>
      <button
        onClick={() => setMode("Sell")}
        style={{
          ...buttonStyle,
          backgroundColor: mode === "Sell" ? "#FF0000" : "transparent",
          color: mode === "Sell" ? "white" : "gray",
        }}
      >
        Sell
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default BuySellTabs;
