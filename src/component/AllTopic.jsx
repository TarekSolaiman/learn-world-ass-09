import React from "react";
import { Link } from "react-router-dom";

const AllTopic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="lg:flex bg-gray-100 my-10 p-10 mx-auto items-center w-8/12 rounded-xl shadow-xl hover:shadow-sm">
      <div>
        <img
          className="w-3/5 bg-black rounded-full mx-auto lg:mx-0"
          src={logo}
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-5xl font-bold my-5 text-center">{name}</p>
        <Link to={`/topic/${id}`}>
          <button className="w-60 h-10 mt-5 rounded-lg text-lg font-semibold bg-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-xl">
            Quiz Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllTopic;
