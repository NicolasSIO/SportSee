import React from "react";
import "./sessionTooltip.css";

export default function SessionsTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="SessionTooltip">
        <p>{payload[0].value}min</p>
      </div>
    );
  }
  return null;
}
