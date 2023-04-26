export interface ITeam {
  name: string;
  logoUrl: string;
}

export interface GameProps {
  league: string;
  games: IGame[];
};

export interface IGame {
  id: number;
  homeTeam: ITeam;
  awayTeam: ITeam;
  time: string;
  odds?: {
    home: number;
    draw: number;
    away: number;
  }
};
