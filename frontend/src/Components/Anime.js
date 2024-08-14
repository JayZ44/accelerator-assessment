import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Anime({ oneAnime, setOneAnime }) {
  const nav = useNavigate();
  const { id } = useParams();

  const getOneAnime = async () => {
    try {
      const response = await fetch(`http://localhost:3001/animes/${id}`);
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
    getOneAnime()
      .then((result) => {
        setOneAnime(result);
      })
      .then(() => {
        console.log(oneAnime);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="anime-item">
      <p>{oneAnime.name}</p>
      <p>{oneAnime.description}</p>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default Anime;
