import React from "react";

const Blog = () => {
  return (
    <div className="container my-10">
      <div className="bg-blue-200 w-8/12 mx-auto my-3 p-5 shadow-xl hover:shadow-sm border-2 border-blue-500 rounded-xl">
        <h1 className="text-2xl font-semibold">
          What is the purpose of the react router ?
        </h1>
        <p className="text-lg font-medium text-gray-500 text-justify">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="bg-blue-200 w-8/12 mx-auto my-3 p-5 shadow-xl hover:shadow-sm border-2 border-blue-500 rounded-xl ">
        <h1 className="text-2xl font-semibold">
          How context api works in react ?
        </h1>
        <p className="text-lg font-medium text-gray-500 text-justify">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="bg-blue-200 w-8/12 mx-auto my-3 p-5 shadow-xl hover:shadow-sm border-2 border-blue-500 rounded-xl">
        <h1 className="text-2xl font-semibold">What is useref ?</h1>
        <p className="text-lg font-medium text-gray-500 text-justify">
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property. You might be familiar with refs primarily as a
          way to access the DOM. If you pass a ref object to React with , React
          will set its .current property to the corresponding DOM node whenever
          that node changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
