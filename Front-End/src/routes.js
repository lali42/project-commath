import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import AccountView from './views/account/AccountView';
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
      { path: "account", element: <AccountView /> },
      { path: "page1", element: <Page1 /> },
      { path: "page2", element: <Page2 /> },
      { path: "page3", element: <Page3 /> },
      { path: "page4", element: <Page4 /> },
      { path: "page5", element: <Page5 /> },
      { path: "page6", element: <Page6 /> },
    ]
  },
];

export default routes;
