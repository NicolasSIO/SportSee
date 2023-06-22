import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./activity.css";

const Activity = ({ data }) => {
  console.log(data.sessions);
  return (
    <div className="Activity">
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
          <CartesianGrid strokeDasharray="1 2" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#E60000" barSize={15} />
          <Bar dataKey="calories" fill="#282D30" barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
