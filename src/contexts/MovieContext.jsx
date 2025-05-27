import { createContext, useContext, useState, useEffect, Children } from "react";

//Create movie context

const MovieContext = createContext();

//Create function that delivers MovieContext

export const useMovieContext = () => useContext(MovieContext);

//Create MovieContext provider

export const MovieProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{

        const storedFavs = localStorage.getItem("favorites");

        if(storedFavs) setFavorites(JSON.parse(storedFavs));
    },[])

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites])

    const addToFavorites = (movie) =>{
        if(isFavorite(movie)) return
        setFavorites((prev)=> [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites((prev)=> prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movie) =>{
        return favorites.includes(movie);
    }

    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite}

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
