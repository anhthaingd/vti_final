import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Features from "./pages/features/Features";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ViewProfile from "./pages/features/ViewProfile";
import ViewGroup from "./pages/features/ViewGroup";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Features />,
    // children: [{ path: "/viewGroup", element: <ViewGroup /> }],
  },
  {
    path: "/users",
    element: <List />,
    
  },
  {
    path: "/viewGroup",
    element: <ViewGroup />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/profile",
    element: <ViewProfile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
