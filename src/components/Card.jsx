import React from "react";
import { useMovieContext } from "../contexts/MovieContext";

function Card({ movie }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie)
    // console.log(movie.title + " " + favorite);
    

    const onFavorite = (e) => {
        e.preventDefault();
        favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
    }

    return <div className="card w-80 h-3/4 rounded-lg bg-stone-600 shadow-xl/20 overflow-hidden">
        <div className="relative w-full h-4/5">
            <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button onClick={onFavorite} className={`absolute top-2 right-2 p-3 rounded-full cursor-pointer`}>
                <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        className={favorite ? "fill-red-500" : "fill-none"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                </svg>

            </button>
        </div>
        <div className="card-info text-sky-50">
            <h3 className="px-3 text-[25px]">{movie.title.length > 20 ? movie.title.slice(0, 20) + "..." : movie.title}</h3>
            <p className="px-3 text-[20px]">{movie.release_date.split("-")[0]}</p>
        </div>
    </div>
}

export default Card;