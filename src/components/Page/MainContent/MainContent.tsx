import Image from "../../helpers/Image/intex";
import LogoIcon from "../../../logo.png";
import { schedule } from "../../../content/games/premier-league/index";
import Button from "../../helpers/Button";
import GamesTable from "../../GamesTable/GamesTable";

type MainContentProps = {
  category: string;
};

const MainContent = ({ category }: MainContentProps) => {
  const isSoccer = category === "Soccer";
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 bg-dark-background">
        <div className="flex justify-center items-center">
          <Image
            src={LogoIcon}
            className="bg-amber-300 text-4xl rounded h-20 cursor-pointer duration-700"
          />
        </div>
        <div className="flex justify-center items-center pb-5">
          <Button
            text="Live & Upcoming"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type={"button"}
          />
          <Button
            text="Outrights"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type={"button"}
          />
          <Button
            text={`All ${category}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type={"button"}
          />
        </div>
        <div className="flex justify-center items-center">
          {isSoccer && <GamesTable schedule={schedule} />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
