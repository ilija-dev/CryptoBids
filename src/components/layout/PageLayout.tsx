// import Header from '@components/Header';
import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";

type PageLayoutProps = {
  children: React.ReactNode;
};
function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
