import React, { useContext } from "react";
import { QuizConext } from "./Root/Main";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quizTopics = useContext(QuizConext);
  console.log(quizTopics);
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={quizTopics}>
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
