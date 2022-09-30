import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import settings from '../assets/css/settings.css'
import { useDispatch, } from "react-redux";


function Settings() {
    const [checked, setChecked] = useState(true);
 
   const navegate = useNavigate();

  //  const typeAndPokemon= ()=>{
  //   setChecked(!checked)
    
  //   } 
  const darkMode =()=>{
    document.body.classList.toggle('dark-theme')
  };
 

  return (
    
     <div className="container">
     <button onClick={()=>navegate(-1)} className="details-btn-back" >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h1 className="settings-title">Settings</h1>

      <section className="settings-container theme">
        <h2 className="settings-subtitle"> Theme </h2>
        <div className="theme-input-c">
        <span className="theme-type">Light</span>

        <label className="input-set-container">
          <input
          onClick={darkMode}
            name=""
            className="pokedex-input-set"
            type={"checkbox"}
          ></input>
          <span className="input-set-style"></span>
        </label>

        <span className="theme-type">Dark</span>
        </div>
      </section>
      <section className="settings-container items">
        <h2 className="settings-subtitle">Items per page</h2>
        <select
      
            className="st-type-search">
            <option value=""># of Items</option>
            <option value=""><button>4 Items</button></option>
            <option value=""><button>8 Items</button></option>
            <option value=""><button>12 Items</button></option>
            <option value=""><button>16 Items</button></option>
          </select>
      </section>
    </div>
    
  );
};

export default Settings;
