import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import "./score.css";

const Score = ({ data }) => {
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];
  console.log(score);
  return (
    <div className="Score">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={score}
            cy={100}
            innerRadius={85}
            outerRadius={100}
            startAngle={90}
            fill="#82ca9d"
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FFFFFF" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="score-objectif">
        <span className="score-value">
          {score[0].value * 100}%<br />
        </span>
        de votre
        <br /> objectif
      </p>
    </div>
  );
};

export default Score;
