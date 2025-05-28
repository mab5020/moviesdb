import React from "react";
import movieIcon from "../assets/movie.png"
import {NavLink} from "react-router-dom"

function Navbar() {

    return <nav className="w-full p-2 bg-stone-600 flex justify-between">
        <div className="flex justify-between">
            <img className="ml-2" src={movieIcon} alt="Movie Icon" height="30" width="50" />
            <h1 className="p-2 mt-2 text-sky-50 text-[32px]">Movies DB</h1>
        </div>
        <div className="mr-5 flex  text-sky-50 justify-between items-center">
            <NavLink to="/moviesdb" className={({ isActive }) => isActive ? "text-red-500 font-bold p-2 text-[25px]" : "p-2 text-[25px]"}>Home</NavLink>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? "text-red-500 font-bold p-2 text-[25px]" : "p-2 text-[25px]"}>Favorites</NavLink>
            {/* <a className="p-2 text-[25px]" href="">Home</a>
            <a className="p-2 text-[25px]" href="">Favorite</a> */}
            {/* <button className="p-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                </svg>
            </button> */}
        </div>
    </nav>
}

export default Navbar;
