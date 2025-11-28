import { MovieListResponse } from "@/types/movie";

// TMDB API key from environment variables
const API_KEY = process.env.MOVIEDB_API_KEY!;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(): Promise<MovieListResponse> {
    // Make the request to fetch popular movies.
    const req = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    if (!req.ok) {
        throw new Error("Failed to get popular movies.");
    }

    return req.json();
}

export async function getMovieDetailsById(id: string) {
    // Make the request to fetch the movie details by ID. Use "append_to_response" to include additional data, such as "videos".
    const req = await fetch(`${BASE_URL}/movie/${id}?append_to_response=videos&api_key=${API_KEY}`);

    if (!req.ok) {
        throw new Error("Failed to get movie details.");
    }

    return req.json();
}