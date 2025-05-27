const API_KEY = "0ef4fe2a571dc73d805b974fa15355fb";
const BASE_URL = "https://api.themoviedb.org/3";
import axios from "axios";

export const getMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = response.data;
    return data.results;
}

export const searchMovies = async (query)=>{
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = response.data;
    return data.results;
}