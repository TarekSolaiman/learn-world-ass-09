import React, { useContext } from "react";
import AllTopic from "./AllTopic";
import { QuizConext } from "./Root/Main";
import learnBG from "../image-bg/learn-bg.webp";
import { Link } from "react-router-dom";

const Topic = () => {
  const quizTopics = useContext(QuizConext);
  console.log(quizTopics);
  return (
    <div className="container m-auto flex-row items-center">
      <div className="lg:flex items-center justify-center mx-20">
        <div>
          <img className="lg:w-4/5" src={learnBG} alt="" />
        </div>
        <div className="text-lg lg:w-2/4 text-justify">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-6xl text-blue-400 font-bold">LEARN</span>{" "}
            World
          </h1>
          <p className="text-lg font-medium mb-2 text-gray-600">
            Everyone's talking about coding, but where do you start? This path
            will give you an introduction to the world of code and basic
            concepts. By the end, you'll know whether Data Science, Computer
            Science or Web Development is right for you.
          </p>
          <div className="flex ">
            <Link to="/blog">
              <button className="mt-5 border-2 border-blue-500 rounded-lg w-40 h-10 hover:bg-blue-300 text-xl font-medium text-blue-400 hover:text-white">
                Blog
              </button>
            </Link>

            <Link to="/about">
              <button className="mt-5 ml-10 border-2 border-blue-500 rounded-lg w-40 h-10 hover:bg-blue-300 text-xl font-medium text-blue-400 hover:text-white">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
      {quizTopics.map((topic) => (
        <AllTopic key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Topic;
