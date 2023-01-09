import React from "react";
import { IoHeart } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useMemo } from "react";

function Focus() {
  const img = useMemo(
    () => localStorage.getItem("img"),
    [localStorage.getItem("img")]
  );
  return (
    <>
      <div>hi</div>
      <div className="sidebar border">
        <header className="sidebar-header h-log">
          <h1 className="sidebar-h1 log">Persia Music</h1>
          <div className="profile-card">
            <div className="image-card">
              <img src={img} className="pro-image" />
            </div>
            <div className="pen">
              <p>Niki Abed</p>
            </div>
          </div>
        </header>

        <div className="sidebar-playlist">
          <ul className="hambur-wrapper liked">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoHeart />
            </IconContext.Provider>
            <li className="hambur-liked">Liked Songs</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Focus;
