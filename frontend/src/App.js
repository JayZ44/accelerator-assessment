import "./App.css";
import Animes from "./Components/Animes";
import Navbar from "./Components/Navbar";
import Anime from "./Components/Anime";
import NewAnime from "./Components/NewAnime";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const [allAnimes, setAllAnimes] = useState([]);
  const [oneAnime, setOneAnime] = useState({});

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Animes allAnimes={allAnimes} setAllAnimes={setAllAnimes} />}
        />
        <Route
          path="/:id"
          element={<Anime oneAnime={oneAnime} setOneAnime={setOneAnime} />}
        />
        <Route path="/new" element={<NewAnime />} />
      </Routes>
    </div>
  );
}

export default App;
