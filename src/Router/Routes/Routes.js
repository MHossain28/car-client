import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import CheackOut from "../../Pages/CheackOut/CheackOut";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Ragister from "../../Pages/Login/Ragister";
import Orders from "../../Pages/Orders/Orders";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/ragister",
        element: <Ragister></Ragister>,
      },
      {
        path: "/cheackout/:id",
        element: <CheackOut></CheackOut>,
        loader: ({ params }) =>
          fetch(`https://car-server-blue.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
