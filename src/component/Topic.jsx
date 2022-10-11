import React, { useContext } from "react";
import AllTopic from "./AllTopic";
import { QuizConext } from "./Root/Main";

const Topic = () => {
  const quizTopics = useContext(QuizConext);
  console.log(quizTopics);
  return (
    <div className="container m-auto flex-row items-center">
      {quizTopics.map((topic) => (
        <AllTopic key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Topic;
