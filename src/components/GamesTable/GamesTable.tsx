import React from "react";
import { GameProps } from "../../utils/interfaces";
import Button from "../helpers/Button";

interface Props {
  schedule: GameProps;
}

const GamesTable: React.FC<Props> = ({ schedule }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>{schedule.league}</tr>
          <tr>
            <th scope="col" className="px-6 py-3">
              Matchup
            </th>
            <th scope="col" className="px-6 py-3">
              Home (To win)
            </th>
            <th scope="col" className="px-6 py-3">
              Draw
            </th>
            <th scope="col" className="px-6 py-3">
              Away (To win)
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {schedule.games.map((game, id) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {game.homeTeam.name}
                <br></br>
                {game.awayTeam.name}
              </th>
              <td>
                <Button
                  className="px-6 py-4"
                  text={`${game.odds?.home}`}
                  type={"submit"}
                />
              </td>
              <td>
                <Button
                  className="px-6 py-4"
                  text={`${game.odds?.draw}`}
                  type={"submit"}
                />
              </td>
              <td>
                <Button
                  className="px-6 py-4"
                  text={`${game.odds?.away}`}
                  type={"submit"}
                />
              </td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;
