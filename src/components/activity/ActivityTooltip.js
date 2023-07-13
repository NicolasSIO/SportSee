import React from "react";
import "./activityTooltip.css";

export default function ActivityTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="ActivityTooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
}
