import React, { useContext } from "react";
import { QuizConext } from "./Root/Main";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quizTopics = useContext(QuizConext);
  console.log(quizTopics);
  return (
    <ResponsiveContainer
      className="mx-auto my-10"
      width="70%"
      height={400}
      maxWidth={300}
    >
      <BarChart
        // width={200}
        // height={100}
        data={quizTopics}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="total"
          fill="rgb(96 165 250)"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
