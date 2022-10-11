import React, { useContext } from "react";
import { QuizConext } from "./Root/Main";

const Statistics = () => {
  const quizTopics = useContext(QuizConext);
  console.log(quizTopics);
  return (
    <div>
      <h1>This is Statistics page</h1>
    </div>
  );
};

export default Statistics;
