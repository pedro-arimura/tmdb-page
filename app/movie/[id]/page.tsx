import { getMovieDetailsById } from "@/lib/tmdb";
import "@/app/globals.css";
import "@/styles/theme.css";

export default async function AboutMoviePage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const movieData = await getMovieDetailsById(id);
    const moviePoster = `https://image.tmdb.org/t/p/w342${movieData.poster_path}`;
    const launchYear = movieData.release_date?.slice(0, 4) || "N/A";
    const videos = movieData.videos;

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
                            .filter((v: { type: string, site: string }) => v.type === "Trailer" && v.site === "YouTube");

                        if (trailers.length === 0) {
                            return <p className="no-trailers">There are no trailers available.</p>;
                        }

                        return trailers.map((trailer: { id: string, key: string, name: string }) => (
                            <a
                                key={trailer.id}
                                className="trailer-card"
                                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="play-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#746A64" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 10L18 14L12 18V10Z" stroke="#746A64" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                                <span>Play {trailer.name}</span>
                            </a>
                        ));
                    })()}
                </div>
            </div>
        </div>
    );
}