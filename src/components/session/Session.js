import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./session.css";
import SessionsTooltip from "./SessionTooltip";

const Session = ({ data }) => {
  const [session, setSession] = useState([]);

  useEffect(() => {
    const datas = async () => {
      const formatData = data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setSession(formatData);
    };
    datas();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Session">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={session} strokeWidth={1}>
          <XAxis
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{
              fontSize: 13,
              stroke: "white",
              opacity: 0.5,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="session-duration">
        Durée moyenne des <span>sessions</span>
      </p>
    </div>
  );
};

export default Session;
