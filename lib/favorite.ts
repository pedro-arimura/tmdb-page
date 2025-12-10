// The variable name in the LocalStorage for the favorites
const KEY_NAME = "favorite-movies";

function isFavoriteMoviesDefined() {
    if (localStorage.getItem(KEY_NAME)) 
        return true;

    localStorage.setItem(KEY_NAME, "{}");
    return false
}

export function isFavorited(movie_id: string) {
    if(isFavoriteMoviesDefined()) {
        const favorites_json = JSON.parse(localStorage.getItem(KEY_NAME)!);

        if(movie_id in favorites_json) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export function toggleFavoriteMovie(movie_id: string) {
    if(isFavoriteMoviesDefined()) {
        let favorites_json = JSON.parse(localStorage.getItem(KEY_NAME)!);
        if(movie_id in favorites_json) {
            delete favorites_json[movie_id];
            localStorage.setItem(KEY_NAME, JSON.stringify(favorites_json));
            return false;
        } else {
            favorites_json[movie_id] = {"id": movie_id}
            localStorage.setItem(KEY_NAME, JSON.stringify(favorites_json));
            return true
        }
    }
}