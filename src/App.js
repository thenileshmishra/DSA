import React from "react";
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/array",
    element: <QuestionCard data={"array"} />,
  },
  {
    path: "/matrix",
    element: <QuestionCard data={"matrix"} />,
  },
  {
    path: "/string",
    element: <QuestionCard data={"string"} />,
  },
  {
    path: "/search_sort",
    element: <QuestionCard data={"search_sort"} />,
  },
  {
    path: "/linked_list",
    element: <QuestionCard data={"linked_list"} />,
  },
  {
    path: "/binary_trees",
    element: <QuestionCard data={"binary_trees"} />,
  },
  {
    path: "/binary_search_tree",
    element: <QuestionCard data={"binary_search_tree"} />,
  },
  {
    path: "/greedy",
    element: <QuestionCard data={"greedy"} />,
  },
  {
    path: "/backtracking",
    element: <QuestionCard data={"backtracking"} />,
  },
  {
    path: "/stacks_queues",
    element: <QuestionCard data={"stacks_queues"} />,
  },
  {
    path: "/heap",
    element: <QuestionCard data={"heap"} />,
  },
  {
    path: "/graph",
    element: <QuestionCard data={"graph"} />,
  },
  {
    path: "/trie",
    element: <QuestionCard data={"trie"} />,
  },
  {
    path: "/dynamic_programming",
    element: <QuestionCard data={"dynamic_programming"} />,
  },
  {
    path: "bit_manipulation",
    element: <QuestionCard data={"bit_manipulation"} />,
  },
]);
function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
