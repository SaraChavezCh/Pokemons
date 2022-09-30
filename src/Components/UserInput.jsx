import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Misty from "../assets/images/Misty.webp";
import pokeballGray from "../assets/images/pokeballGray.png";
import { changeName } from "../store/slices/userName.slice";
import userInput from "../assets/css/userInput.css";

function UserInput() {
  // controlar el input
  const [userName, setUserName] = useState("");
  //Mandar el nombre con el boton
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navegate("/pokedex/");
  };
 
  return (
    <div className="user-input">
      <section className="userInput-welcome-title">
        <h1 className="userInput-title">Hello Trainer!</h1>
        <img className="userInput-img" src={Misty} />
      </section>
      
      <div className="userInput-container">
        <p className="userInput-welcome">Give me your name to start</p>
        <section className="input-control">

        <input
          className="userInput-input"
          type={"text"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button className="send-name" onClick={dispatchUserName}>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
        </section>
      </div>
    </div>
  );
}

export default UserInput;
