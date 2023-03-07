import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Inbox } from "../pages/inbox";
import { Login } from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inbox",
        element: <Inbox />,
      },
    ],
  },
]);
