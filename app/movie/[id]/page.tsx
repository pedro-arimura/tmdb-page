import { getMovieDetailsById } from "@/lib/tmdb";
import "@/app/globals.css";
import "@/styles/theme.css";

export default async function AboutMoviePage({ params }: { params: { id: string }}) {
    const { id } = await params;

    const movieData = await getMovieDetailsById(id);
    console.log(movieData);
    const moviePoster = `https://image.tmdb.org/t/p/w342${movieData.poster_path}`;
    const launchYear = movieData.release_date?.slice(0, 4) || "N/A";
    const videos = movieData.videos;
    
    console.log(movieData.videos);

    return (
      <div>
        <div className="title-bar">
            <h1>{movieData.title}</h1>
        </div>

        <div className="movie-details-wrapper">
            <div className="main-info">
                <img className="poster" src={moviePoster} alt={movieData.title} />

                <div className="info-text">
                <div>
                    <p className="year">{launchYear}</p>
                    <p className="movie-duration">{movieData.runtime} mins</p>
                </div>
                <div>
                    <p className="rating">{movieData.vote_average.toFixed(1)}/10</p>
                    <button className="favorite-btn">Add to Favorite</button>
                </div>
                </div>
            </div>

            <p className="overview">{movieData.overview}</p>

            <h3 className="trailers-title">TRAILERS</h3>

            <div className="trailers-list">
                {(() => {
                    const trailers = videos.results
                    .filter((v: {type: string, site: string}) => v.type === "Trailer" && v.site === "YouTube");

                    if (trailers.length === 0) {
                    return <p className="no-trailers">There are no trailers available.</p>;
                    }

                    return trailers.map((trailer: {id: string, key: string, name: string}) => (
                    <a
                        key={trailer.id}
                        className="trailer-card"
                        href={`https://www.youtube.com/watch?v=${trailer.key}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="play-icon">&#9654;</span>
                        <span>Play {trailer.name}</span>
                    </a>
                    ));
                })()}
            </div>
        </div>
      </div>
    );
}