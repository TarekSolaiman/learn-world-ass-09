import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../image-bg/learnLogo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <button
          onClick={() => setOpen(!open)}
          className="flex h-6 w-6 mt-5 text-blue-400 md:hidden lg:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </button>
        <ul
          className={
            open
              ? " text-justify absolute top-14 right-2 md:flex bg-gray-800 py-5 md:py-0"
              : "items-center hidden space-x-3 md:flex"
          }
        >
          <li>
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
          <li>
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
          <li>
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
      </div>
    </header>
  );
};

export default Header;
