import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  Radar,
} from "recharts";

import "./performance.css";

const Performance = ({ data }) => {
  return (
    <div className="Radar">
      <RadarChart width={258} height={263} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="#ffffff"
          fill="#ffffff"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default Performance;
