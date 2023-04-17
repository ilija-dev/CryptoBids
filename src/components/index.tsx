import Header from "../components/Header/index";
import React from "react";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
