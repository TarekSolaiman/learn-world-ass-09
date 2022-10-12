import React from "react";
import { toast } from "react-toastify";

const Question = ({ question: questionall }) => {
  console.log(questionall);
  const { question, correctAnswer, options } = questionall;

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

  const btnAnswer = () => {
    return toast.success(correctAnswer, {
      autoClose: 500,
    });
  };

  return (
    <div className="w-8/12 mx-auto my-10 p-5 lg:p-10 text-center text-blue-600 font-semibold shadow-xl bg-blue-100 rounded-xl border-2 border-blue-300">
      <div className="flex justify-end">
        <button className="" onClick={btnAnswer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
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
    <div>
      <label for={option}>
        <div className="bg-blue-200 p-5 lg:p-10 text-sm lg:text-2xl md:text-2xl font-medium text-blue-600 rounded-xl border-2 border-blue-400 shadow-xl hover:shadow-sm">
          <input
            onClick={() => answerHendler(option)}
            className="flex"
            type="radio"
            id={option}
            name={`answer${correctAnswer}`}
          />
          {option}
        </div>
      </label>
    </div>
  );
};

export default Question;
