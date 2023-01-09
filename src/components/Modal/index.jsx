import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useModal } from "../../contexts/Modal";
import { useAuth } from "../../contexts/Auth";

function Modal({ modalIsOpen }) {
  const navigate = useNavigate();
  const { setModalOpen } = useModal();
  const handleClick = (e) => {
    setModalOpen(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    axios.get("http://localhost:8000/users").then((res) => {
      console.log(res.data);
      const arrData = res.data.filter(
        (e) => e.email === email && e.password === password
      );
      if (arrData.length !== 0) {
        setUserLog(true);
      }
    });
    console.log(userLog);
    if (userLog) {
      toggleAuth();
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (userLog) {
      toggleAuth();
      navigate("/dashboard");
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [userLog, setUserLog] = useState(false);

  const { toggleAuth, user } = useAuth();

  useEffect(() => {
    console.log(user.loggedIn);
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`modal-${modalIsOpen}`} onClick={handleClick}>
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-close">
            <button className="close-btn" onClick={handleClick}>
              <IoClose size={20} />
            </button>
          </div>
          <div className="modal-header">
            <h1 className="login-hdr">Log In</h1>
          </div>
          <div className="modal-body">
            <form className="log-form" onClick={handleLogin}>
              <div className="user">
                <label>Username</label>
                <input
                  type="text"
                  id="user-input"
                  placeholder="Enter username or email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="pass">
                <label>Password</label>
                <input
                  type="password"
                  id="pass-input"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className="forgetPass">
                  <Link to="/forgetpass">Forget password?&lrm;</Link>
                </p>
              </div>

              <div className="modal-footer">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
                <p className="sidebar-p">
                  Don't have an account? &lrm;
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
