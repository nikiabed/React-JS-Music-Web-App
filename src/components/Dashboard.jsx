import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsPenFill } from "react-icons/bs";
import Song from "./Song";

function Dashboard() {
  const [isOpenR, setOpenR] = useState(false);
  const [song, setSong] = useState("");
  const [songName, setSN] = useState("");

  const [fill1, setFill1] = useState(false);
  const [nofill1, setNoFill1] = useState(true);
  const [fill2, setFill2] = useState(false);
  const [nofill2, setNoFill2] = useState(true);
  const [fill3, setFill3] = useState(false);
  const [nofill3, setNoFill3] = useState(true);
  const [fill4, setFill4] = useState(false);
  const [nofill4, setNoFill4] = useState(true);
  const [fill5, setFill5] = useState(false);
  const [nofill5, setNoFill5] = useState(true);
  const [fill6, setFill6] = useState(false);
  const [nofill6, setNoFill6] = useState(true);
  const [fill7, setFill7] = useState(false);
  const [nofill7, setNoFill7] = useState(true);
  const [fill8, setFill8] = useState(false);
  const [nofill8, setNoFill8] = useState(true);
  const [fill9, setFill9] = useState(false);
  const [nofill9, setNoFill9] = useState(true);
  const [fill10, setFill10] = useState(false);
  const [nofill10, setNoFill10] = useState(true);

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const [url, setUrl] = useState("");
  const upimage = uploadedImage.current;
  const [clicked, setClicked] = useState(false);
  const [imgx, setImgx] = useState("");

  const [likedList, setLiked] = useState([]);
  const [open, setOpenL] = useState(false);

  const handleImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      console.log(reader);
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setImgx(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  localStorage.setItem("img", imgx);

  const [link, setLink] = useState({
    bad: [
      require("../assest/badBlood.mp3"),
      require("../assest/1.jpg"),
      "Bad Blood",
      "Taylor Swift",
      fill1,
      nofill1,
      setFill1,
      setNoFill1,
    ],
    hello: [
      require("../assest/hello.mp3"),
      require("../assest/2.jpg"),
      "Hello",
      "Adel",
      fill2,
      nofill2,
      setFill2,
      setNoFill2,
    ],
    up: [
      require("../assest/up&up.mp3"),
      require("../assest/3.jpg"),
      "Up & Up",
      "Coldplay",
      fill3,
      nofill3,
      setFill3,
      setNoFill3,
    ],
    lose: [
      require("../assest/loseYouToLoveMe.mp3"),
      require("../assest/4.jpg"),
      "Lose You To Love Me",
      "Selena Gomez",
      fill4,
      nofill4,
      setFill4,
      setNoFill4,
    ],
    so: [
      require("../assest/so.mp3"),
      require("../assest/5.jpg"),
      "So What",
      "Pink",
      fill5,
      nofill5,
      setFill5,
      setNoFill5,
    ],
    roar: [
      require("../assest/roar.mp3"),
      require("../assest/6.jpg"),
      "Roar",
      "Katty Perry",
      fill6,
      nofill6,
      setFill6,
      setNoFill6,
    ],
    stay: [
      require("../assest/stay.mp3"),
      require("../assest/7.jpg"),
      "Stay",
      "Justin bieber",
      fill7,
      nofill7,
      setFill7,
      setNoFill7,
    ],
    baraye: [
      require("../assest/calm.mp3"),
      require("../assest/8.jpg"),
      "Calm Down",
      "Rema",
      fill8,
      nofill8,
      setFill8,
      setNoFill8,
    ],
    tehran: [
      require("../assest/tehran.mp3"),
      require("../assest/9.jpg"),
      "Tehran",
      "Sogand",
      fill9,
      nofill9,
      setFill9,
      setNoFill9,
    ],
    levitating: [
      require("../assest/levitating.mp3"),
      require("../assest/10.jpg"),
      "Levitating",
      "Dua Lipa",
      fill10,
      nofill10,
      setFill10,
      setNoFill10,
    ],
  });

  const handleClick = (e) => {
    console.log(e.target.className);
    const name = e.target.className;
    const nameClass = name.slice(4, name.length);
    console.log(link[nameClass]);
    setSong(link[nameClass][0]);
    setClicked(true);
    setSN(nameClass);
  };

  return (
    <>
      <div className="sidebar border">
        <header className="sidebar-header h-log">
          <h1 className="sidebar-h1 log">Persia Music</h1>
          <div className="profile-card">
            <div
              className="image-card"
              onClick={() => imageUploader.current.click()}
            >
              <label className="img-input">
                <input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={handleImage}
                  ref={imageUploader}
                />
              </label>
              {!upimage && (
                <img
                  src={require("../assest/dash.png")}
                  className="pro-image"
                />
              )}
              <img ref={uploadedImage} className="pro-image" />
            </div>
            <div className="pen">
              <BsPenFill
                color="blueviolet"
                size={13}
                onClick={() => imageUploader.current.click()}
                cursor="pointer"
              />
              <p>Niki Abed</p>
            </div>
          </div>
        </header>

        <div className="sidebar-playlist">
          <div className="container">
            <ul className="hambur-wrapper liked">
              <IconContext.Provider value={{ className: "react-icons" }}>
                <IoHeart onClick={() => setOpenL((state) => !state)} />
              </IconContext.Provider>
              <li
                className="hambur-liked"
                onClick={() => {
                  setOpenL((state) => !state);
                }}
              >
                Liked Songs
              </li>
            </ul>

            {open && (
              <div className="liked-list">
                {likedList.map(function (i) {
                  return (
                    <li
                      className="items"
                      onClick={() => {
                        setSN(i);
                        setSong(link[i][0]);
                        setClicked(true);
                      }}
                    >
                      {link[i][2]} - {link[i][3]}
                    </li>
                  );
                })}
              </div>
            )}
          </div>

          <ul className="hambur-wrapper liked">
            <Hamburger
              toggled={isOpenR}
              toggle={setOpenR}
              size={18}
              direction="left"
              color="blueviolet"
            />
            <li className="hambur-liked">Recently Played</li>
          </ul>
        </div>
      </div>

      {/* main part */}

      {/* genre */}
      <main className="main border">
        <div className="title">
          <div className="main-header gnr">
            <h3 className="listen">Rock</h3>{" "}
            <img src={require("../assest/14.jpg")} className="genre" />
          </div>
          <div className="main-header2 gnr">
            <h3 className="listen">Chill Mood</h3>
            <img src={require("../assest/12.jpg")} className="genre" />
          </div>
          <div className="main-header3 gnr">
            <h3 className="listen">Weekends</h3>
            <img src={require("../assest/13.jpg")} className="genre" />
          </div>
          <div className="main-header4 gnr">
            <h3 className="listen">Happy Pop</h3>
            <img src={require("../assest/11.jpg")} className="genre" />
          </div>
          <div className="main-header5 gnr">
            <h3 className="listen">Focus</h3>
            <Link to={"/focus"}>
              <img src={require("../assest/15.jpg")} className="genre" />
            </Link>
          </div>
        </div>

        {/* MUSIC IMAGES */}
        <div className="music1">
          <a href="#" onClick={handleClick}>
            <div className="img1 contain">
              <figure className="fig1">
                <img src={link.bad[1]} className="img bad" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill1}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill1(true);
                      setNoFill1(false);
                      setLiked((p) => [...p, "bad"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill1}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill1(false);
                      setNoFill1(true);
                      setLiked((c) => c.filter((i) => i !== "bad"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.bad[2]}</figcaption>
              <figcaption className="figCapArtist">{link.bad[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img2 contain">
              <figure className="fig1">
                <img src={link.hello[1]} className="img hello" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill2}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill2(true);
                      setNoFill2(false);
                      setLiked((p) => [...p, "hello"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill2}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill2(false);
                      setNoFill2(true);
                      setLiked((c) => c.filter((i) => i !== "hello"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.hello[2]}</figcaption>
              <figcaption className="figCapArtist">{link.hello[3]}</figcaption>
            </div>
          </a>

          <a href="#" onClick={handleClick}>
            <div className="img3 contain">
              <figure className="fig1">
                <img src={link.up[1]} className="img up" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill3}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill3(true);
                      setNoFill3(false);
                      setLiked((p) => [...p, "up"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill3}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill3(false);
                      setNoFill3(true);
                      setLiked((c) => c.filter((i) => i !== "up"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.up[2]}</figcaption>
              <figcaption className="figCapArtist">{link.up[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img4 contain">
              <figure className="fig1">
                <img src={link.lose[1]} className="img lose" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill4}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill4(true);
                      setNoFill4(false);
                      setLiked((p) => [...p, "lose"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill4}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill4(false);
                      setNoFill4(true);
                      setLiked((c) => c.filter((i) => i !== "lose"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.lose[2]}</figcaption>
              <figcaption className="figCapArtist">{link.lose[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img5 contain">
              <figure className="fig1">
                <img src={link.so[1]} className="img so" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill5}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill5(true);
                      setNoFill5(false);
                      setLiked((p) => [...p, "so"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill5}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill5(false);
                      setNoFill5(true);
                      setLiked((c) => c.filter((i) => i !== "so"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.so[2]}</figcaption>
              <figcaption className="figCapArtist">{link.so[3]}</figcaption>
            </div>
          </a>
        </div>

        <div className="music2">
          <a href="#" onClick={handleClick}>
            <div className="img6 contain">
              <figure className="fig1">
                <img src={link.roar[1]} className="img roar" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill6}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill6(true);
                      setNoFill6(false);
                      setLiked((p) => [...p, "roar"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill6}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill6(false);
                      setNoFill6(true);
                      setLiked((c) => c.filter((i) => i !== "roar"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.roar[2]}</figcaption>
              <figcaption className="figCapArtist">{link.roar[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img7 contain">
              <figure className="fig1">
                <img src={link.stay[1]} className="img stay" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill7}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill7(true);
                      setNoFill7(false);
                      setLiked((p) => [...p, "stay"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill7}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill7(false);
                      setNoFill7(true);
                      setLiked((c) => c.filter((i) => i !== "stay"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.stay[2]}</figcaption>
              <figcaption className="figCapArtist">{link.stay[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img8 contain">
              <figure className="fig1">
                <img src={link.calm[1]} className="img calm" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill8}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill8(true);
                      setNoFill8(false);
                      setLiked((p) => [...p, "calm"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill8}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill8(false);
                      setNoFill8(true);
                      setLiked((c) => c.filter((i) => i !== "calm"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.calm[2]}</figcaption>
              <figcaption className="figCapArtist">{link.calm[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img9 contain">
              <figure className="fig1">
                <img src={link.tehran[1]} className="img tehran" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill9}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill9(true);
                      setNoFill9(false);
                      setLiked((p) => [...p, "tehran"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill9}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill9(false);
                      setNoFill9(true);
                      setLiked((c) => c.filter((i) => i !== "tehran"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">{link.tehran[2]}</figcaption>
              <figcaption className="figCapArtist">{link.tehran[3]}</figcaption>
            </div>
          </a>
          <a href="#" onClick={handleClick}>
            <div className="img10 contain">
              <figure className="fig1">
                <img src={link.levitating[1]} className="img levitating" />
                <IconContext.Provider
                  value={{ className: `heart1 heart1-${nofill10}` }}
                >
                  <IoHeartOutline
                    onClick={() => {
                      setFill10(true);
                      setNoFill10(false);
                      setLiked((p) => [...p, "levitating"]);
                    }}
                  />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: `heart1 fill heart1-${fill10}` }}
                >
                  <IoHeart
                    onClick={() => {
                      setFill10(false);
                      setNoFill10(true);
                      setLiked((c) => c.filter((i) => i !== "levitating"));
                    }}
                  />
                </IconContext.Provider>
              </figure>
              <figcaption className="figCapName">
                {link.levitating[2]}
              </figcaption>
              <figcaption className="figCapArtist">
                {link.levitating[3]}
              </figcaption>
            </div>
          </a>
        </div>
      </main>
      <footer className="footer-dash">
        {clicked && (
          <Song
            music={link}
            className={songName}
            fill={link[songName][4]}
            nofill={link[songName][5]}
          />
        )}
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

export default Dashboard;