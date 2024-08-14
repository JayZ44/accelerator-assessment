import Anime from "./Anime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Animes({ allAnimes, setAllAnimes }) {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const nav = useNavigate();
  const getAnimes = async () => {
    try {
      const response = await fetch(`http://localhost:3001/animes/all`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation.", error);
    }
  };

  useEffect(() => {
    getAnimes()
      .then((result) => {
        setAllAnimes(result);
      })
      .then(() => {
        console.log(allAnimes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [allAnimes.length]);

  return (
    <section className="index" id="anime-list">
      <button
        onClick={() => {
          nav("/new");
        }}
      >
        New Anime
      </button>
      {allAnimes.map((anime) => {
        return (
          <div key={anime.id}>
            <h4>{anime.name}</h4>
            <p>{anime.description}</p>
            <button
              onClick={() => {
                nav(`/${anime.id}`);
              }}
            >
              {" "}
              More Info{" "}
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Animes;
