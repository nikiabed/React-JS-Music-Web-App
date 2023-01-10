import React, { useState, useMemo } from "react";
import { useModal } from "../contexts/Modal";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import TrackList from "../components/Track";
import AppNavbar from "../components/Nabar";
function Home() {
  const [song, setSong] = useState("");
  const { modalIsOpen, setModalOpen } = useModal();
  const trackAudioList = useMemo(() => {
    return {
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
    };
  }, []);

  const handlePlaySelectedMusic = (track) => {
    setSong(trackAudioList[track]);
  };

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
