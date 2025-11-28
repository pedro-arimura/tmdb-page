// types/movie.ts
// typing for the system, to make maintaince easier
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string | null;
  release_date: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

export interface MovieListResponse {
  results: Movie[] | [];
}