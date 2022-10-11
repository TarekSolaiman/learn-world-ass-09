import React from "react";
import { toast } from "react-toastify";

const Question = ({ question: questionall }) => {
  console.log(questionall);
  const { question, id, correctAnswer, options } = questionall;

  const answerHendler = (answer) => {
    if (answer === correctAnswer) {
      return toast.success("Wow Right Answer", {
        autoClose: 500,
      });
    } else {
      return toast.warning("opps rong Answer!", {
        autoClose: 500,
      });
    }
  };

  return (
    <div className="w-8/12 mx-auto my-10 p-5 lg:p-10 text-center text-blue-600 font-semibold shadow-xl bg-blue-100 rounded-xl border-2 border-blue-300">
      <h1 className="text-sm lg:text-2xl md:text-2xl">{question}</h1>
      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        {options.map((option) => (
          <OptionBTN
            option={option}
            correctAnswer={correctAnswer}
            answerHendler={answerHendler}
          />
        ))}
      </div>
    </div>
  );
};

const OptionBTN = ({ option, correctAnswer, answerHendler }) => {
  console.log(option);
  return (
    <div className="relative">
      <input
        className="absolute top-2 left-2"
        type="radio"
        id={option}
        name={`answer${correctAnswer}`}
      />
      <label for={option}>
        <div
          onClick={() => answerHendler(option)}
          className="bg-blue-200 p-5 lg:p-10 text-sm lg:text-2xl md:text-2xl font-medium text-blue-600 rounded-xl border-2 border-blue-400 shadow-xl hover:shadow-sm"
        >
          {option}
        </div>
      </label>
    </div>
  );
};

export default Question;
