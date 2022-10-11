import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export const QuizConext = createContext([]);

const Main = () => {
  const quizTopic = useLoaderData();
  // console.log(quizTopic);
  return (
    <QuizConext.Provider value={quizTopic.data}>
      <Header />
      <Outlet />
      <Footer />
    </QuizConext.Provider>
  );
};

export default Main;
