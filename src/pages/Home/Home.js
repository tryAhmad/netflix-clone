import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero-banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className="caption-img" />
          <p>
            Discovering his ties to an ancient secret order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-buttons">
            <button className="btn">
              {" "}
              <img src={play_icon} alt="play" />
              Play
            </button>
            <button className="btn btn-dark">
              {" "}
              <img src={info_icon} alt="info" />
              More info
            </button>
          </div>
          <TitleCards title="Popular on Netflix" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" />
        <TitleCards title="Only on Netflix" />
        <TitleCards title="Upcoming" />
        <TitleCards title="Top Picks for You" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
