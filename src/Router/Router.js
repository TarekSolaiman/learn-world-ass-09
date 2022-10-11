/*
PAGE Link name { Topic , Statistics , Blog }

Get all quiz topics: https://openapi.programming-hero.com/api/quiz

Get topic details by topic id: https://openapi.programming-hero.com/api/quiz/${id}

Example: https://openapi.programming-hero.com/api/quiz/1

*/

import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import ErrorPage from "../component/ErrorPage";
import Main from "../component/Root/Main";
import Quiz from "../component/Quiz";
import Statistics from "../component/Statistics";
import Topic from "../component/Topic";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Topic />,
      },
      {
        path: "/topic",
        element: <Topic />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/topic/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz />,
      },
    ],
  },
]);
