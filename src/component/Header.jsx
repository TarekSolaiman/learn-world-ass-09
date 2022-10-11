import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../image-bg/learnLogo.png";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <p className="flex items-center p-2">
          <img className="h-14" src={logo} alt="" />
          <h1 className="text-1xl lg:text-3xl font-semibold">
            {" "}
            <span className="text-3xl lg:text-5xl text-blue-400 font-bold">
              LEARN
            </span>{" "}
            World
          </h1>
        </p>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/topic"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 dark:border-transparent text-blue-400 text-xl font-semibold"
                  : "flex items-center px-4 -mb-1 dark:border-transparent text-xl font-semibold hover:text-blue-400"
              }
            >
              Topic
            </NavLink>
          </li>
          <li className="flex ">
            <NavLink
              rel="noopener noreferrer"
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 dark:border-transparent text-blue-400 text-xl font-semibold"
                  : "flex items-center px-4 -mb-1 dark:border-transparent text-xl font-semibold hover:text-blue-400"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 dark:border-transparent text-blue-400 text-xl font-semibold"
                  : "flex items-center px-4 -mb-1 dark:border-transparent text-xl font-semibold hover:text-blue-400"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
