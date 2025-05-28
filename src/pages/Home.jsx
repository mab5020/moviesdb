import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMovies, searchMovies } from "../services/service";

function Home() {
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Cannot load movies...")
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])
    // const movies = [{id: 1, title: "Interstellar", releaseYear: "2014"},{id: 2, title: "The Dark Knight", releaseYear: "2009"},{id: 3, title: "The Matrix", releaseYear: "2001"},{id: 4, title: "Forrest Gump", releaseYear: "1999"},];
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            return
        }
        if (loading) {
            return
        }
        setLoading(true);
        try {
            const searchResults = await searchMovies(query);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to searchmovies...")
        } finally {
            setLoading(false);
        }
    }

    const handleEnter = async (e) => {
        if (e.key === "Enter") {
            await handleSubmit(e);
        }
    }

    return <div className="home-container grow bg-stone-500 overflow-x-hidden">
        <div className="mt-10 flex justify-center text-[20px]">
            <div className="p-2 w-2/5 border-2 border-red-300 rounded-s-full">
                <input onKeyUp={handleEnter} className="w-full px-3 text-sky-50 outline-none" type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." value={query} />
            </div>
            <button className="p-3 rounded-e-full text-sky-50 bg-red-500" onClick={handleSubmit}>Search</button>
        </div>

        <div className="w-full mt-10 ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">

            {
                error && <div className="text-red-500 text-[50px] text-center">{error}</div>
            }
            {
                loading ? <div className="text-sky-50 text-[50px] text-center">Loading...</div> : movies && movies.map((movie) => {
                    return <Card key={movie.id} movie={movie} />
                })
            }
        </div>
    </div>
}

export default Home;