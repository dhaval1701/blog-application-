import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import BlogListing from "pages/BlogListing";
import SinglePost from "pages/SinglePost";
import AuthorPage from "pages/AuthorPage";
import Layout from "pages/Layout";
import AuthorForm from "pages/AuthorForm";
import LogIn from "pages/auth/LogIn";
import SignUp from "pages/auth/SignUp";

const ProjectRoutes = () => {
  let element = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "login", element: <LogIn /> },
    { path: "signup", element: <SignUp /> },
    // {
    //   path: "homepage",
    //   element: <HomePage />,
    // },
    // {
    //   path: "bloglisting",
    //   element: <BlogListing />,
    // },
    // {
    //   path: "singlepost",
    //   element: <SinglePost />,
    // },
    // {
    //   path: "authorpage",
    //   element: <AuthorPage />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "homepage",
          element: <HomePage />,
        },
        {
          path: "bloglisting",
          element: <BlogListing />,
        },
        {
          path: "singlepost/:id", // Define a dynamic parameter ":id"
          element: <SinglePost />,
        },
        {
          path: "authorpage",
          element: <AuthorPage />,
        },
        {
          path: "authorform",
          element: <AuthorForm />,
        },
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;
