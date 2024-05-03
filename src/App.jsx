import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="app">
      <div className="container">
        {/* Left Side of The Program */}

        <div className="left">
          <h1>Restaurant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, et!
            Sed ea,
            <br /> vel iste expedita ad repellat dolor quidem et a facere,
            repudiandae id beatae eius. Dolorem deleniti tempora magni? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Minus mollitia laborum et delectus consequatur expedita animi totam
            ipsam facilis culpa, ametb <br /> alias in tenetur quam dolore optio
            soluta ut porro!
          </p>
        </div>

        {/* Right Side Of the Program */}

        <div className="right">
          <div className="card">
            <div className="card-details">
              <p className="text-title">Sign Up</p>
              <div className="inputs">
                <form>
                  <input className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    required
                  />
                  <input className="input"
                    type="email"
                    placeholder="Enter Your Email ID"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                  />
                  <input className="input"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </form>
                <p>
                  Already Have an Account? <a href="Login">Log In</a>{" "}
                </p>
                <button className="button" type="submit" onClick={handleSubmit}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
