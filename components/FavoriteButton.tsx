'use client';
import { isFavorited, toggleFavoriteMovie } from "@/lib/favorite";
import { useState, useEffect } from "react";

export default function FavoriteButton({ movie_id } : { movie_id: string }) {
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(isFavorited(movie_id))
    }, [movie_id]);

    const handleToggle = () => {
        const nowFavorited = toggleFavoriteMovie(movie_id);
        setFavorite(nowFavorited!);
    }

    return (
        <button className="favorite-btn" onClick={handleToggle}>
            {isFavorite ? "Favorited" : "Add to Favorites"}
        </button>
    )

}