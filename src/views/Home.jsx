import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useModal } from "../contexts/Modal";
import Modal from "../components/Modal";
import TrackList from "../components/Track";
import AppNavbar from "../components/Nabar";
function Home() {
  const [song, setSong] = useState("");
  const [link, setLink] = useState({
    bad: require("../assest/audio/badBlood.mp3"),
    hello: require("../assest/audio/hello.mp3"),
    up: require("../assest/audio/up&up.mp3"),
    lose: require("../assest/audio/loseYouToLoveMe.mp3"),
    so: require("../assest/audio/so.mp3"),
    roar: require("../assest/audio/roar.mp3"),
    stay: require("../assest/audio/stay.mp3"),
    calm: require("../assest/audio/calm.mp3"),
    tehran: require("../assest/audio/tehran.mp3"),
    levitating: require("../assest/audio/levitating.mp3"),
  });

  const handlePlaySelectedMusic = (track) => {
    setSong(link[track]);
  };

  const { modalIsOpen, setModalOpen } = useModal();
  return (
    <>
      <Sidebar />
      {modalIsOpen && <Modal modalIsOpen={modalIsOpen} />}
      <main className="main border">
        <AppNavbar />
        <TrackList handleSelect={handlePlaySelectedMusic} />
      </main>

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
