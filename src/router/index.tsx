import React, { lazy } from "react";
import ErrorPage from "@components/ErrorPage";
import LoginPage from "../layout/components/Login";
import App, { authLoader } from "../App";
import { createBrowserRouter, Navigate, Route, Outlet } from "react-router-dom";

import {
  DashboardOutlined,
  EditOutlined,
  TableOutlined,
  BarsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AuthRoute from "./AuthRoute";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const FormPage = lazy(() => import("../pages/FormPage"));
const TablePage = lazy(() => import("../pages/TablePage"));
const AccountCenter = lazy(() => import("../pages/AccountPage/AccountCenter"));
const AccountSettings = lazy(
  () => import("../pages/AccountPage/AccountSettings")
);
const DetailPage = lazy(() => import("../pages/DetailPage"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            title: "Dashboard",
            icon: <DashboardOutlined />,
            element: <Dashboard />,
          },
          {
            path: "form",
            title: "表单页",
            icon: <EditOutlined />,
            element: <FormPage />,
          },
          {
            path: "table",
            title: "列表页",
            icon: <TableOutlined />,
            element: <TablePage />,
          },
          {
            path: "detail",
            title: "详情页",
            icon: <BarsOutlined />,
            element: <DetailPage />,
          },
          {
            path: "account",
            title: "个人页",
            icon: <UserOutlined />,
            children: [
              {
                path: "/account/center",
                title: "个人中心",
                element: <AccountCenter />,
              },
              {
                path: "/account/settings",
                title: "个人设置",
                element: <AccountSettings />,
              },
            ],
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
      <Route path={item.path} key={item.path || Math.random()} element={<AuthRoute auth={item.auth} >{item.element ? item.element : <Outlet />}</AuthRoute>}>
        {item?.children && routesWithAuth(item.children)}
      </Route>
    )


  })
}

export { routes, routesWithAuth };

// export default createBrowserRouter(routes);
