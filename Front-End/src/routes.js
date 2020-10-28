import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import AccountView from './views/account/AccountView';
import Home from './views/Home'
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";
import Page4 from "./views/Page4";
import Page5 from "./views/Page5";
import Page6 from "./views/Page6";




const routes = [
  {
    path: "project-commath",
    element: <DashboardLayout />,
    children:[
      { path: "/", element: <Home /> },
      { path: "account", element: <AccountView /> },
      { path: "b2s", element: <Page1 /> },
      { path: "elimination", element: <Page2 /> },
      { path: "interpolation", element: <Page3 /> },
      { path: "differentiation", element: <Page4 /> },
      { path: "integration", element: <Page5 /> },
      { path: "root-finding", element: <Page6 /> },
    ]
  },
];

export default routes;
