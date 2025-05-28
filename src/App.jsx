import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import {MovieProvider} from "./contexts/MovieContext.jsx"


function App() {

  return (
    <MovieProvider>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/moviesdb/" element={<Home />} />
          <Route path="/moviesdb/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>

  )
}

export default App;
