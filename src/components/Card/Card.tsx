import React, { useState, useEffect } from "react";
import { ITeam } from "../../utils/interfaces";

type GameProps = {
  id: number;
  homeTeam: ITeam;
  awayTeam: ITeam;
  time: string;
};

const Card = ({ id, homeTeam, awayTeam, time }: GameProps) => {
  const [countdown, setCountdown] = useState<number>(
    Math.floor((new Date(time).getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(Math.floor((new Date(time).getTime() - Date.now()) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="text-lg font-bold text-gray-800 mb-2">
        {new Date(time).toLocaleString()}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={homeTeam.logoUrl}
            alt={homeTeam.name}
            className="w-8 h-8 mr-2"
          />
          <div className="text-gray-800 font-semibold">{homeTeam.name}</div>
        </div>
        <div className="text-gray-800 font-semibold">
          {countdown > 0 ? (
            <span>
              {Math.floor(countdown / 3600)}h {Math.floor(countdown / 60) % 60}m{" "}
              {countdown % 60}s
            </span>
          ) : (
            <span>Kickoff!</span>
          )}
        </div>
        <div className="flex items-center">
          <div className="text-gray-800 font-semibold">{awayTeam.name}</div>
          <img
            src={awayTeam.logoUrl}
            alt={awayTeam.name}
            className="w-8 h-8 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
