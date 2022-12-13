import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import { useModal } from "../contexts/Modal";
import Modal from "./Modal";

function Home() {
  const [song, setSong] = useState("");
  const [link, setLink] = useState({
    bad: require("../assest/badBlood.mp3"),
    hello: require("../assest/hello.mp3"),
    up: require("../assest/up&up.mp3"),
    lose: require("../assest/loseYouToLoveMe.mp3"),
    iran: require("../assest/iraneMan.mp3"),
    roar: require("../assest/roar.mp3"),
    stay: require("../assest/stay.mp3"),
    baraye: require("../assest/baraye.mp3"),
    tehran: require("../assest/tehran.mp3"),
    levitating: require("../assest/levitating.mp3"),
  });

  const handleClick = (e) => {
    console.log(e.target.className);
    const name = e.target.className;
    const nameClass = name.slice(4, name.length);
    console.log(link[nameClass]);
    setSong(link[nameClass]);
  };

  const handleGenre = () => {
    alert("Please Login to see more.");
  };

  const screen = window.screen.width;

  const { modalIsOpen, setModalOpen } = useModal();
  return (
    <>
      {screen >= 970 ? <Sidebar /> : <Nav />}
      {modalIsOpen && <Modal modalIsOpen={modalIsOpen} />}
      <main className="main border">
        <div className="title">
          <div className="main-header gnr">
            <h3 className="listen">Rock</h3>{" "}
            <img
              src={require("../assest/14.jpg")}
              className="genre"
              onClick={handleGenre}
            />
          </div>
          <div className="main-header2 gnr">
            <h3 className="listen">Chill Mood</h3>
            <img
              src={require("../assest/12.jpg")}
              className="genre"
              onClick={handleGenre}
            />
          </div>
          <div className="main-header3 gnr">
            <h3 className="listen">Weekends</h3>
            <img
              src={require("../assest/13.jpg")}
              className="genre"
              onClick={handleGenre}
            />
          </div>
          <div className="main-header4 gnr">
            <h3 className="listen">Happy Pop</h3>
            <img
              src={require("../assest/11.jpg")}
              className="genre"
              onClick={handleGenre}
            />
          </div>
          <div className="main-header5 gnr">
            <h3 className="listen">Focus</h3>
            <img
              src={require("../assest/15.jpg")}
              className="genre"
              onClick={handleGenre}
            />
          </div>
        </div>

        {/* MUSIC IMAGES */}
        <div className="music1">
          <a href="#" onClick={handleClick}>
            <div className="img1 contain">
              <figure className="fig1">
                <img src={require("../assest/1.jpg")} className="img bad" />
              </figure>
              <figcaption className="figCapName">Bad Blood</figcaption>
              <figcaption className="figCapArtist">Taylor Swift</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img2 contain">
              <figure className="fig1">
                <img src={require("../assest/2.jpg")} className="img hello" />
              </figure>
              <figcaption className="figCapName">Hello</figcaption>
              <figcaption className="figCapArtist">Adel</figcaption>
            </div>
          </a>

          <a href="#" onClick={handleClick}>
            <div className="img3 contain">
              <figure className="fig1">
                <img src={require("../assest/3.jpg")} className="img up" />
              </figure>
              <figcaption className="figCapName">Up&Up</figcaption>
              <figcaption className="figCapArtist">Coldplay</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img4 contain">
              <figure className="fig1">
                <img src={require("../assest/4.jpg")} className="img lose" />
              </figure>
              <figcaption className="figCapName">
                Lose You To Love Me
              </figcaption>
              <figcaption className="figCapArtist">Selena Gomez</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img5 contain">
              <figure className="fig1">
                <img src={require("../assest/5.jpg")} className="img iran" />
              </figure>
              <figcaption className="figCapName">Irane Man</figcaption>
              <figcaption className="figCapArtist">King Raam</figcaption>
            </div>
          </a>
        </div>

        <div className="music2">
          <a href="#" onClick={handleClick}>
            <div className="img6 contain">
              <figure className="fig1">
                <img src={require("../assest/6.jpg")} className="img roar" />
              </figure>
              <figcaption className="figCapName">Roar</figcaption>
              <figcaption className="figCapArtist">Katy Perry</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img7 contain">
              <figure className="fig1">
                <img src={require("../assest/7.jpg")} className="img stay" />
              </figure>
              <figcaption className="figCapName">Stay</figcaption>
              <figcaption className="figCapArtist">Justin Bieber</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img8 contain">
              <figure className="fig1">
                <img src={require("../assest/8.jpg")} className="img baraye" />
              </figure>
              <figcaption className="figCapName">Baraye</figcaption>
              <figcaption className="figCapArtist">Shervin</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img9 contain">
              <figure className="fig1">
                <img src={require("../assest/9.jpg")} className="img tehran" />
              </figure>
              <figcaption className="figCapName">Tehran</figcaption>
              <figcaption className="figCapArtist">Sogand</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img10 contain">
              <figure className="fig1">
                <img
                  src={require("../assest/10.jpg")}
                  className="img levitating"
                />
              </figure>
              <figcaption className="figCapName">Levitating</figcaption>
              <figcaption className="figCapArtist">Dua Lipa</figcaption>
            </div>
          </a>
        </div>
      </main>

      {/* MUSIC PLAYER */}
      <footer className="footer">
        <audio
          id="audio"
          src={song}
          controls="controls"
          preload="metadata"
          autoPlay
        ></audio>
      </footer>
    </>
  );
}

export default Home;
