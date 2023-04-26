import { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import MainContent from "../Page/MainContent/MainContent";
import { CategoryContext } from "../../state/context/CategoryContext";

function PageLayout() {
  const {category} = useContext(CategoryContext);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex items-center justify-center w-full">
          <MainContent category={category}/>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
