import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/lib/tmdb";
import "@/styles/theme.css";

export default async function HomePage() {
    const movies = await getPopularMovies();

    return (
        <div className="movies-grid">
            {movies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}