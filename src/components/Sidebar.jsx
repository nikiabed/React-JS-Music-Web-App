import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { IoHeart } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useModal } from "../contexts/Modal";

function Sidebar() {
  const [isOpenR, setOpenR] = useState(false);

  const { modalIsOpen, setModalOpen } = useModal();

  const handleClick = (e) => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="sidebar border">
        <header className="sidebar-header ">
          <h1 className="sidebar-h1">Persia Music</h1>
          <button className="sidebar-but" onClick={handleClick}>
            Log In
          </button>
        </header>
        <div className="sidebar-playlist">
          <ul className="hambur-wrapper liked">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoHeart />
            </IconContext.Provider>
            <li
              className="hambur-liked"
              onClick={() => alert("Please log in to see more.")}
            >
              Liked Songs
            </li>
          </ul>
          <ul className="hambur-wrapper liked">
            <Hamburger
              toggled={isOpenR}
              toggle={setOpenR}
              size={18}
              direction="left"
              color="blueviolet"
            />
            <li
              className="hambur-liked"
              onClick={() => alert("Please log in to see more.")}
            >
              Recently Played
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
