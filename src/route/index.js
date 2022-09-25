import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/index";

import Context from "../views/context/index.jsx";
import Form from "../views/forwardRef/form.jsx";
import Input from "../views/input/index.jsx";
import UseState from "../views/hooks/useState.jsx";
import UseEffect from "../views/hooks/use-effect.jsx";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "context",
        element: <Context />,
      },
      {
        path: "forwardRef",
        element: <Form />,
      },
      {
        path: "input",
        element: <Input />,
      },
      {
        path: "useState",
        element: <UseState />,
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/context" />,
  },
];

const router = createBrowserRouter(routes);

// const RouterElement = () => createBrowserRouter(routes);

export default router;
