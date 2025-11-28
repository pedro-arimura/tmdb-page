import { Movie } from "@/types/movie";
import Link from "next/link";
import React from "react";

function MovieCard({ movie }: { movie: Movie }) {
  // Construct the full image URL
  const imageUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="movie-card">
        <img src={imageUrl} alt={movie.title} />
      </div>
    </Link>
  );
}

export default React.memo(MovieCard);