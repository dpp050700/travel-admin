import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./config/router";
import {Routes, BrowserRouter} from 'react-router-dom'
import {routes, routesWithAuth} from './router'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BrowserRouter><Routes>{routesWithAuth(routes)}</Routes></BrowserRouter>);
