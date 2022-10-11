import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quizs = useLoaderData();
  console.log(quizs);
  return (
    <div>
      <h1 className="text-6xl">This is Quiz Page</h1>
    </div>
  );
};

export default Quiz;
