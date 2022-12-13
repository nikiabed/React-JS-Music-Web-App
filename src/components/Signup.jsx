import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "./Regex";
import "./signup.css";

function Signup() {
  const handleSubmit = async (e) => {
    if (
      validEmail.test(email) &&
      validPassword.test(password) &&
      password === password2
    ) {
      e.preventDefault();
      const post = { email: email, password: password };
      try {
        const res = await axios.post("http://localhost:8000/users", post);
        console.log(res.data);
      } catch (e) {
        alert(e);
      }
    } else {
      e.preventDefault();
    }

    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [pwdcError, setPwdcError] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };

  return (
    <form className="form">
      <header>
        <h1>Sign Up</h1>
      </header>
      <div>
        <label className="label">Name:&lrm;</label>
        <input
          type="name"
          name="name"
          className="inp"
          onChange={(e) => setName(e.target.value)}
          placeholder="Niki"
          value={name}
        />
      </div>

      <div>
        <label className="label">Email:&lrm;</label>
        <input
          type="email"
          name="email"
          className="inp"
          placeholder="me@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          onBlur={() =>
            !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false)
          }
        />
        {emailErr && <p>Your email is invalid</p>}
      </div>

      <div>
        <label className="label">Password:&lrm;</label>
        <input
          type="password"
          name="password"
          className="inp"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 8 letters using at least one digit"
          value={password}
          onBlur={() =>
            !validPassword.test(password)
              ? setPwdError(true)
              : setPwdError(false)
          }
        />
        {pwdError && <p>Your password is invalid</p>}
      </div>

      <div>
        <label className="label">Confirm Password:&lrm;</label>
        <input
          type="password"
          name="password2"
          className="inp"
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Minimum 8 letters using at least one digit"
          value={password2}
          onBlur={() =>
            password !== password2 ? setPwdcError(true) : setPwdcError(false)
          }
        />
        {pwdcError && <p>Passwords aren't match</p>}
      </div>

      <div className="btn">
        <button className="btn" onClick={handleSubmit}>
          <Link to="/">Submit </Link>
        </button>
      </div>
    </form>
  );
}

export default Signup;
