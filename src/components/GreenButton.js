import React from "react";

export default function GreenButton({ title }) {
  return (
    <button
      style={{
        fontSize: "1.3rem",
        fontWeight: "700",
        color: "white",
        padding: "1.3rem 3rem",
        border: "none",
        borderRadius: "5px",
        marginTop: "3rem",
        backgroundColor: "#2eb36c",
      }}
    >
      {title}
    </button>
  );
}
