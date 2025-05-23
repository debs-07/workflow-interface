import { JSX } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { useAuth } from "./context/AuthContext";
import { Root } from "./layouts/root/Root";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  access: "public" | "protected";
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <h1>Welcome to Workflow.</h1>,
    access: "public",
  },
  {
    path: "/register",
    element: <Register />,
    access: "public",
  },
  {
    path: "/login",
    element: <Login />,
    access: "public",
  },
  {
    path: "/home",
    element: <h1>Home</h1>,
    access: "protected",
  },
];

const RouteRenderer = ({ route: { access, element } }: { route: RouteConfig }) => {
  const { token } = useAuth();
  const isAuthenticated = Boolean(token);

  if (access === "public" && isAuthenticated) {
    return <Navigate to="/home" />;
  }

  if (access === "protected" && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  return element;
};

export const router = createBrowserRouter([
  {
    Component: Root,
    children: routes.map((route) => ({
      path: route.path,
      element: <RouteRenderer route={route} />,
    })),
  },
]);
