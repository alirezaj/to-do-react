import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Inbox } from "../pages/inbox";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'inbox',
          element: <Inbox />
        }
      ]
    }
  ]);