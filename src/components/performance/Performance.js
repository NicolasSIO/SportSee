import React, { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
  ResponsiveContainer,
} from "recharts";

import "./performance.css";

const Performance = ({ data }) => {
  const [kind, setKind] = useState([]);

  useEffect(() => {
    const datas = async () => {
      const formatData = data.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return { ...data };
        }
      });
      setKind(formatData);
    };
    datas();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={kind}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10 }} />
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
