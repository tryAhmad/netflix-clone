import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title = "Popular", category }) => {

  const [apiData, setApiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTE2Zjg2NTk4NDJhM2M5YjFlZWQ5YTYxNmU1YWNjNSIsIm5iZiI6MTcyNDc3MDA0Ny4zNTkwMzMsInN1YiI6IjY2Y2RlNWNlNTczNmFmYmZiMTlkYjIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1ZV5uS_Z9m_p6VBpULWq-ZDTkM1RzuMDyrEhgGBVJs",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="cards-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
