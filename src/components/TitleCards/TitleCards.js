import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({title = "Popular", category}) => {

    const cardRef = useRef();

    const handleWheel = (e) => {
        e.preventDefault();
        cardRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        cardRef.current.addEventListener("wheel", handleWheel);
    },[])

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="cards-list">
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="card" ref={cardRef} >
              <img src={card.image} alt={card.title} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
