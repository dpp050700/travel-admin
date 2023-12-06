import React, { lazy } from "react";
import ErrorPage from "@components/ErrorPage";
import LoginPage from "../layout/components/Login";
import App from "../App";
import { Navigate, Route, Outlet } from "react-router-dom";

import {
  DashboardOutlined,
  EditOutlined,
  TableOutlined,
} from "@ant-design/icons";
import AuthRoute from "./AuthRoute";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserList = lazy(() => import("../pages/user/user.list"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            title: "首页",
            icon: <DashboardOutlined />,
            element: <Dashboard />,
          },

          {
            path: "user",
            title: "用户中心",
            icon: <TableOutlined />,
            children: [
              {
                path: "/user/list",
                title: "用户列表",
                element: <UserList />,
              },
            ],
          },
          {
            path: "form",
            title: "表单页面",
            icon: <EditOutlined />,
            element: lazy(() => import("../pages/FormPage")),
            meta: { hiddenMenu: true },
          },
          {
            path: "table",
            title: "列表Deom",
            icon: <EditOutlined />,
            element: lazy(() => import("../pages/TablePage")),
            meta: { hiddenMenu: true },
          },
          {
            path: "*",
            element: <Navigate to="/" replace={true} />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const routesWithAuth = (routes: any[]) => {
  return routes.map((item) => {
    return (
      <Route
        path={item.path}
        key={item.path || Math.random()}
        element={
          <AuthRoute auth={item.auth}>
            {item.element ? item.element : <Outlet />}
          </AuthRoute>
        }
      >
        {item?.children && routesWithAuth(item.children)}
      </Route>
    );
  });
};

export { routes, routesWithAuth };
