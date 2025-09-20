import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/App";
import DashboardPage from "../pages/DashboardPage";

const NewRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/admin",
      element: <DashboardPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default NewRouter;
