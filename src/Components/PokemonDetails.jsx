import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import title from "../assets/images/title.png";
import pokemondetails from "../assets/css/pokemondetails.css";

function PokemonDetails() {
  const navegate = useNavigate();

  const back = () => {
    navegate(-1);
  };

  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [movements, setmovements] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, []);
  console.log(pokemon);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setmovements(res.data.moves));
  }, []);
  console.log(movements);

  return (
    <div className="all-section">
      <div className="background"></div>
      <button className="details-btn-back" onClick={back}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <img className="details-title" src={title} />

   
        <section className="details-main">
       
          <img
            className="details-pokemon-image"
            src={pokemon.sprites?.other.dream_world.front_default}
          />
          
          <div className="details-pokemon-info">
            <span className="pokemon-info-g">{pokemon.weight}</span>
            <span className="pokemon-info-g">{pokemon.height}</span>
            <p className="pokemon-info-p">Weight</p>
            <p className="pokemon-info-p">Height</p>
          </div>
          <h1 className="details-name">{pokemon.name}</h1>
          <hr></hr>
          <div className="id-container">
            <p className="showId"># {id}</p>
          </div>
        </section>
        <div className="two-columns">

        <section className="details-main type">
          <h2 className="details-name">Type</h2>
          <span className="type-info">{pokemon.types?.[0].type.name}</span>
          <span className="type-info purple">{pokemon?.types?.[1]?.type.name}</span>
        </section>

        <section className="details-main type">
          <h2 className="details-name">Abilities</h2>
          <span className="type-info ability">
            {pokemon.abilities?.[0].ability.name}
          </span>
          <span className="type-info ability">
            {pokemon.abilities?.[1].ability.name}
          </span>
        </section>
        </div>

        <section className="details-main stats">
          <h2 className="details-name">Stats Base</h2>

          <div className="stats-info-container">
            <p className="stats-name">HP:</p>
            <div className="stats-progress">
              <div className="level-animation">
                <span className="stats-level">
                  {pokemon.stats?.[0].base_stat}/150
                </span>
              </div>
            </div>
          </div>
          <div className="stats-info-container">
            <p className="stats-name">Speed: </p>
            <div className="stats-progress">
              <div className="level-animation">
                <span className="stats-level">
                  {pokemon.stats?.[5].base_stat}/150
                </span>
              </div>
            </div>
          </div>
          <div className="stats-info-container">
            <p className="stats-name"> Attack: </p>
            <div className="stats-progress">
              <div className="level-animation">
                <span className="stats-level">
                  {pokemon.stats?.[1].base_stat}/150
                </span>
              </div>
            </div>
          </div>
          <div className="stats-info-container">
            <p className="stats-name">Defense: </p>
            <div className="stats-progress">
              <div className="level-animation">
                <span className="stats-level">
                  {" "}
                  {pokemon.stats?.[2].base_stat}/150
                </span>
              </div>
            </div>
          </div>
        </section>
    
      <section className="details-main movements">
        <h2 className="details-name">Movements</h2>
        <ul className="movements-list">
          {movements.map((move) => (
            <li className="movements-items" key={move.move.url}>
              {move.move.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PokemonDetails;
