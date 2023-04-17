import Image from "../../helpers/Image/intex";
import LogoIcon from "../../../logo.png";
import { useEffect } from "react";

const MainContent = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 bg-dark-background">
        <div className="flex justify-center items-center">
          <Image
            src={LogoIcon}
            className="bg-amber-300 text-4xl rounded h-20 cursor-pointer duration-700"
          />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default MainContent;
