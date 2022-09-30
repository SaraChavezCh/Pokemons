import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Pokemoncard from '../assets/css/pokemondcard.css'



function PokemonCard({pokemonUrl}) {

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
        
    },[])
    // console.log(pokemon);

    const navigate= useNavigate();


    const style = `pokemonCard ${pokemon.types?.[0].type.name}`
  return (
    <div 
    id='card'
    className={style}
    onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
     <h1 className='PC-pokemon-name'>{pokemon.name}</h1>
     <p className='PC-pokemon-info types'>Types: {pokemon?.types?.[0].type.name}, {pokemon.types?.[1]?.type.name}</p>
     <p className='PC-pokemon-info'>Hp: {pokemon.stats?.[0].base_stat}</p>
     <p className='PC-pokemon-info'>Atack: {pokemon.stats?.[1].base_stat}</p>
     <p className='PC-pokemon-info'>Speed: {pokemon.stats?.[5].base_stat}</p>
     <section className='PC-image-container'>
     <img className='PC-pokemon-image' src={pokemon.sprites?.other.dream_world.front_default}/>
     </section>
    </div>
  )
}

export default PokemonCard
