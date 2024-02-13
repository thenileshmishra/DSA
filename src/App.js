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
    element: <QuestionCard data={"Array"} />,
  },
  {
    path: "/matrix",
    element: <QuestionCard data={"Matrix"} />,
  },
  {
    path: "/string",
    element: <QuestionCard data={"String"} />,
  },
  {
    path: "/search_sort",
    element: <QuestionCard data={"Search & Sort"} />,
  },
  {
    path: "/linked_list",
    element: <QuestionCard data={"Linked List"} />,
  },
  {
    path: "/binary_trees",
    element: <QuestionCard data={"Binary Trees"} />,
  },
  {
    path: "/binary_search_tree",
    element: <QuestionCard data={"BST"} />,
  },
  {
    path: "/greedy",
    element: <QuestionCard data={"Greedy"} />,
  },
  {
    path: "/backtracking",
    element: <QuestionCard data={"BackTracking"} />,
  },
  {
    path: "/stacks_queues",
    element: <QuestionCard data={"Stacks & Queues"} />,
  },
  {
    path: "/heap",
    element: <QuestionCard data={"Heap"} />,
  },
  {
    path: "/graph",
    element: <QuestionCard data={"Graph"} />,
  },
  {
    path: "/trie",
    element: <QuestionCard data={"Trie"} />,
  },
  {
    path: "/dynamic_programming",
    element: <QuestionCard data={"Dynamic Programming"} />,
  },
  {
    path: "bit_manipulation",
    element: <QuestionCard data={"Bit Manipulation"} />,
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
