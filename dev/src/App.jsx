import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Locations from "./routes/Locations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
