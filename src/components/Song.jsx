import React, { useState, useRef } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import axios from "axios";

function Song({ className, music, fill, nofill }) {
  return (
    <>
      <div className="song-div">
        <div className="song-div2">
          <p className="song-artist">{music[className][3]}</p>
          <h5 className="song-name">{music[className][2]}</h5>
        </div>
        <img src={music[className][1]} className="song-img" />
      </div>
    </>
  );
}

export default Song;
