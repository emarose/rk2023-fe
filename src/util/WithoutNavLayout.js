import React from "react";
import { Outlet } from "react-router-dom";

const WithoutNavLayout = () => {
  return <Outlet />;
};

export default WithoutNavLayout;
