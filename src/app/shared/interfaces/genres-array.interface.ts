export interface GenresInterface {
  genre: string;
  id?: number;
  movies: { poster_path: string }[];
}
