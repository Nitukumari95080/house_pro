import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./componets/Home/Home";
import SignUp from "./componets/Signup/SignUp";
import Login from "./componets/Login/Login";
import FarmHouses from "./componets/FarmHouse/FarmHouses";
import ForestHouses from "./componets/FarmHouse/ForestHouses";
import Rooms from "./componets/FarmHouse/Rooms";
import PoolHouses from "./componets/FarmHouse/PoolHouses";
import TentHouses from "./componets/FarmHouse/TentHouses";
import Cabins from "./componets/FarmHouse/Cabins";
import Shops from "./componets/FarmHouse/Shops";

SignUp;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="/farmhouses" element={<FarmHouses />} />
      <Route path="/foresthouses" element={<ForestHouses />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/poolhouses" element={<PoolHouses />} />
      <Route path="/tenthouses" element={<TentHouses />} />
      <Route path="/cabins" element={<Cabins />} />
      <Route path="/shops" element={<Shops />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
