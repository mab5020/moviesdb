import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import Card from "../components/Card";

function Favorites() {

    const {favorites} = useMovieContext();

    if (favorites) {
        return <div className="favorites-container grow bg-stone-500 overflow-x-hidden">

            <div className="w-full mt-10 ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
                favorites && favorites.map((movie) => {
                    return <Card key={movie.id} movie={movie} />
                })
            }
            </div>
    </div>
    }

    return <div className="favorites-container grow bg-stone-500 overflow-x-hidden">

        <div className="w-full flex justify-center text-center">
            <div className="w-3/5 mt-10 rounded-lg bg-stone-600 shadow-xl/20">
                <h1 className="m-2 text-[50px] text-red-500">No favorites added yet</h1>
                <p className="m-2 text-[30px] text-sky-50">Start adding your favorites movie here...</p>
            </div>
        </div>
    </div>
}

export default Favorites;