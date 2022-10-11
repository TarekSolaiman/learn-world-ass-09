import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const quizs = useLoaderData();
  const { total, questions, name, logo } = quizs.data;
  // console.log(quizs.data);
  return (
    <div className="container lg:mx-auto my-10">
      <img
        className="w-2/5 lg:w-1/5 mx-auto bg-black rounded-full"
        src={logo}
        alt=""
      />
      <h1 className="text-3xl lg:text-5xl font-bold text-center pt-10">
        {name} Quize
      </h1>
      <h1 className="text-2xl lg:text-3xl font-bold text-center pt-5">
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
