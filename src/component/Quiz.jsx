import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const quizs = useLoaderData();
  const { total, questions, name, logo } = quizs.data;
  // console.log(quizs.data);
  return (
    <div className="container mx-auto my-10">
      <img className="w-80 mx-auto bg-black rounded-full" src={logo} alt="" />
      <h1 className="text-5xl font-bold text-center pt-10">{name} Quize</h1>
      <h1 className="text-3xl font-bold text-center pt-5">
        Total Questions : {total}
      </h1>
      <div>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
