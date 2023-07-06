import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

import "./session.css";

const Session = ({ data }) => {
  return (
    <div className="Session">
      <AreaChart width={258} height={263} data={data.sessions}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sessionLength" stroke="white" />
      </AreaChart>
    </div>
  );
};

export default Session;
