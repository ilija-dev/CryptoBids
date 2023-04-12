import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import SidebarElement from "./SidebarElement";
import sportsData from "../../content/sports/index";

const SidebarSection = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center w-24 flex-wrap">
          {sportsData.map((sport) => (
            <SidebarElement
              key={sport.id}
              Icon={sport.icon}
              title={sport.name}
              open={open}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center rounded-md bg"></div>
    </div>
  );
};

export default SidebarSection;
