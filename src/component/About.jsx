import React from "react";
import { Link } from "react-router-dom";
import learnBG from "../image-bg/learn-bg.webp";

const About = () => {
  return (
    <div>
      <section className=" text-gray-500">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={learnBG}
              alt=""
              className="object-contain h-80 sm:h-80 lg:h-96 ml-10 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-3xl">
              <span className="text-blue-400 text-5xl">LEARN</span> World
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify">
              Everyone's talking about coding, but where do you start? This path
              will give you an introduction to the world of code and basic
              concepts. By the end, you'll know whether Data Science, Computer
              Science or Web Development is right for you.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/topic"
                className="px-8 py-3 text-lg font-semibold border-2 rounded border-blue-300 hover:bg-blue-400"
              >
                Home
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/statistics"
                className="px-8 py-3 text-lg font-semibold border-2 rounded border-blue-300 hover:bg-blue-400"
              >
                Statistics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
