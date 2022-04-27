import React, { FC, useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import Profile from "../pages/Profile";
import NoMatch from "../pages/NoMatch";
import { AuthContext } from "../App";

export enum RouteNames {
  MAIN = "/",
  LOGIN = "/login",
  NEWS = "/news",
  PROFILE = "/profile",
}

const ProtectedRoutes: FC = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to={RouteNames.LOGIN} />;
};

export const AppRouter: FC = () => {
  return (
    <Routes>
      {/* Public routes*/}
      <Route path={RouteNames.MAIN} element={<Home />} />
      <Route path={RouteNames.LOGIN} element={<Login />} />
      <Route path={RouteNames.NEWS} element={<News />} />

      {/* Private routes*/}
      <Route element={<ProtectedRoutes />}>
        <Route path={RouteNames.PROFILE} element={<Profile />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
