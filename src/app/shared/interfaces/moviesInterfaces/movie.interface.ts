export interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  overview: string;
  credits?: { cast: { name: string }[] };
  genres?: { id: number; name: string }[];
}
