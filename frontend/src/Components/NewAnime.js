import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function NewAnime() {
  const nav = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  const [anime, setAnime] = useState({
    name: "",
    description: "",
  });

  function handleNameChange(event) {
    let currentValue = event.target.value;

    setAnime({
      ...anime,
      name: currentValue,
    });
  }

  function handleDesciptionChange(event) {
    let currentValue = event.target.value;

    setAnime({
      ...anime,
      description: currentValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(anime);
    fetch(`http://localhost:3001/animes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(anime),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnime({
          name: "",
          description: "",
        });
      })
      .then(() => {
        nav("/");
      });
  }

  // console.log(anime)
  return (
    <div>
      <form className="new-anime-form" onSubmit={handleSubmit}>
        <h1>New Anime</h1>
        <label>
          Please enter the name of your anime:
          <input
            type="text"
            value={anime.name}
            onChange={(event) => handleNameChange(event)}
          />
        </label>
        <label>
          Please enter the description of your anime:
          {/* <input type='text'/> */}
          <textarea
            value={anime.description}
            onChange={(event) => handleDesciptionChange(event)}
          />
        </label>
        <div className="form-button-container">
          {/* <input type="submit" value={'Submit'} /> */}
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          nav("/");
        }}
        className="form-button"
      >
        Home
      </button>
    </div>
  );
}
