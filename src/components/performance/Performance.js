import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
  ResponsiveContainer,
} from "recharts";

import "./performance.css";

const Performance = ({ data }) => {
  return (
    <div className="Radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar
            dataKey="value"
            stroke="#ffffff"
            fill="#ffffff"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
