import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import pokedex from "../assets/css/pokedex.css";
import Pokemoncard from "../assets/css/pokemondcard.css";
import { useDispatch } from "react-redux";



function Pokedex() {
  const [getPokemons, setGetPokemons] = useState([]);
  const [inputName, setInputName] = useState("");
  const [typeList, setTypeList] = useState([]);
  const [checked, setChecked] = useState(true);
  const [isSearchName, setIsSearchName] = useState(false);

  const navegate = useNavigate();
  const name = useSelector((state) => state.username);
  const back = () => {
    navegate(-1);
  };
  //API

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155")
      .then((res) => setGetPokemons(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypeList(res.data.results));
  }, []);

  //searching by name  =============
  const searchingName = () => {
    navegate(`/pokedex/${inputName}`);
  };
  //searching by type =========
  const searchByType = (typeListUrl) => {
    axios.get(typeListUrl)
    .then((res) => 
    setGetPokemons(res.data.pokemon)
    );
  };

  // paginación

const [page, setPage] = useState (1);
const pokemonPerPage= 15;
const lastPokemon= page *pokemonPerPage;
const firstPokemon = lastPokemon - pokemonPerPage  ;
const pokemonPaginated = getPokemons.slice(firstPokemon, lastPokemon)
const totalPage = Math.ceil(getPokemons.length / pokemonPerPage)

const pagesNumber= [];
for (let i = 1; i <= totalPage; i++) {
  pagesNumber.push(i)
  
}
//breakpages
const [btn, setBtn] = useState (1);
const btnPerPage= 5;
const lastBtn= btn *btnPerPage;
const firstBtn = lastBtn - btnPerPage  ;
const totalBtn = Math.ceil(pagesNumber.length/btnPerPage)

const breakPages= (pagesNumber.map (number=> (
  <button className="number" key={number} onClick={()=>setPage(number)}>{number}</button>
))).slice(firstBtn, lastBtn)

  // Button type-pokemon
  const typeAndPokemon = () => {
    setChecked(!checked);
    isSearchName(false);
  };
  const goBack= ()=>{
    setBtn(btn - 1),
    setPage(page - 1)
  }
  const goNext= ()=>{
    setBtn(btn + 1),
    setPage(page + 1)
  }

 
  return (
    <div className="pokedex-container">
      <button className="pokedex-back" onClick={back}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
      <h1 className="pokedex-title">Pokedex</h1>
      <p className="pokedex-welcome">
        Welcome {name} here you can find your favorite pokemon
      </p>
      <section className="type-Search">
        <span>type</span>
        <label className="input-ch-container">
          <input
            name=""
            className="pokedex-input-ch"
            type={"checkbox"}
            onClick={typeAndPokemon}
          ></input>
          <span className="input-ch-style"></span>
        </label>
        <span>pokemon</span>
      </section>

      {checked ? (
        <div>
          <select
            className="pokedex-type-search"
            onChange={(e) => searchByType(e.target.value)}
          >
            <option value="">Select a type</option>
            {typeList.map((type) => (
              <option value={type.url} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      ) : isSearchName ? (
        <>
          <input
            className="pokedex-input-tx"
            type={"text"}
            placeholder="Search by name..."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          ></input>
          <button
            className="pokedex-btn-search"
            onClick={() => searchingName()}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </>
      ) : (
        <>
          <button
            className="search-byname"
            onClick={() => setIsSearchName(true)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </>
      )}

      <section className="cards-container">
        {pokemonPaginated.map((pokemon) => (
          <div  key={pokemon.url ? pokemon.url : pokemon.pokemon.url} className="pokemon-card-container" >
            <PokemonCard
            
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              
            />
          </div>
        ))}
      </section>
      <div className="pagination-container">
      <button className="pag-btn"
      onClick={goBack}
      disabled={page == 1} >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {
        breakPages
      }
      <button className="pag-btn"
      disabled={page == totalPage}
      onClick={goNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
        </div>
    </div>
  );
}

export default Pokedex;
