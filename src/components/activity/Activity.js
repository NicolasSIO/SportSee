import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./activity.css";
import ActivityTooltip from "./ActivityTooltip";

const Activity = ({ data }) => {
  return (
    <div className="Activity">
      <div className="legend">
        <div>
          <img src="/assets/icons/blackDot.svg" alt="Couleur poids" />
          <p className="description">Poids (kg)</p>
        </div>
        <div>
          <img src="/assets/icons/redDot.svg" alt="Couleur calories" />
          <p className="description">Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis tickLine={false} stroke="1 1" />
          <YAxis orientation="right" axisLine={false} tickLine={false} />
          <Tooltip content={<ActivityTooltip />} />
          <Bar dataKey="kilogram" fill="#E60000" barSize={15} />
          <Bar dataKey="calories" fill="#282D30" barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
