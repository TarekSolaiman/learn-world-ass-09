import React, { useContext } from "react";
import { QuizConext } from "./Root/Main";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Statistics = () => {
  const quizTopics = useContext(QuizConext);
  // console.log(quizTopics);
  return (
    <BarChart
      className="lg:mx-auto md:mx-auto lg:my-20 md:my-10"
      width={500}
      height={300}
      data={quizTopics}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
};

export default Statistics;
