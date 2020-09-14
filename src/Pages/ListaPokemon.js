import React, { useState, useRef, useEffect, useReducer } from "react";
import { Dropdown, Card } from "../Components/index";
import { addPokemonList, navigation, setType } from "../Redux/actions";
import { connect } from "react-redux";
import { getPokemonsOnList, getCurrentPage } from "../Redux/selectors";
import "../Style/card.less";
import pikachu from "../Style/images/pokemon/pikachu.png";
import blastoise from "../Style/images/pokemon/blastoise.png";
import charizard from "../Style/images/pokemon/charizard.png";
import flareon from "../Style/images/pokemon/flareon.png";
import vileplume from "../Style/images/pokemon/vileplume.png";
import bulbasaur from "../Style/images/pokemon/bulbasaur.png";
import gengar from "../Style/images/pokemon/gengar.png";
import alakazam from "../Style/images/pokemon/alakazam.png";
import pokeball from "../Style/images/pokemon/pokeball.png";
import { useSelector, useDispatch } from "react-redux";

export const ListaPokemon = ({ startId, endId }) => {
  const dispatch = useDispatch();
  const pokemonsList = useSelector(getPokemonsOnList);

  const typeList = [
    "All",
    "Normal",
    "Poison",
    "Electric",
    "Fire",
    "Water",
    "Rock",
    "Grass",
    "Fighting",
    "Psychic",
    "Ground",
    "Fairy"
  ];

  function getType(type, pokemonName) {
    switch (type) {
      case "speed":
        return pokemonsList[pokemonName]?.stats[0]?.base_stat;
      case "specialDefense":
        return pokemonsList[pokemonName]?.stats[1]?.base_stat;
      case "specialAttack":
        return pokemonsList[pokemonName]?.stats[2]?.base_stat;
      case "defense":
        return pokemonsList[pokemonName]?.stats[3]?.base_stat;
      case "attack":
        return pokemonsList[pokemonName]?.stats[4]?.base_stat;
      case "hp":
        return pokemonsList[pokemonName]?.stats[5]?.base_stat;
      case "weight":
        return pokemonsList[pokemonName]?.weight;
      case "height":
        return pokemonsList[pokemonName]?.height;
      case "type":
        return pokemonsList[pokemonName]?.types[
          pokemonsList[pokemonName]?.types.length - 1
        ]?.type?.name;
      default:
        return;
    }
  }

  async function fetchPokemon(startingId, finalId) {
    let arrayPokemon = [];
    console.log("Start", startingId);
    for (let aux = startingId; aux <= finalId; aux++) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${aux}`)
        .then(async res => res.json())
        .then(async res => {
          arrayPokemon = { ...arrayPokemon, [res.name]: res };
        })
        .catch(error => console.log(error));
    }

    dispatch(addPokemonList(arrayPokemon, startingId, finalId));
    console.log("End");
  }

  function getAvailabity(type, pokemonName) {
    const ability = pokemonsList[pokemonName]?.abilities?.find(
      ability =>
        (type == "Normal" && !ability.is_hidden) ||
        (type == "Hidden" && ability.is_hidden)
    );

    return ability?.ability?.name;
  }

  const imageSrcSelector = pokemonName => {
    switch (pokemonsList[pokemonName]?.name) {
      case "pikachu":
        return pikachu;
      case "blastoise":
        return blastoise;
      case "charizard":
        return charizard;
      case "flareon":
        return flareon;
      case "bulbasaur":
        return bulbasaur;
      case "gengar":
        return gengar;
      case "alakazam":
        return alakazam;
      default:
        return pokemonsList[pokemonName]?.sprites?.front_default || pokeball;
    }
  };

  useEffect(() => {
    if (pokemonsList) return;
    fetchPokemon(startId, endId);
  });

  if (pokemonsList)
    return (
      <div class="listContainer pokemonPageWrapper">
        <Dropdown
          title="pokemon list"
          name="pokemon"
          items={typeList}
          selected={typeList[0]}
          callback={item => {
            dispatch(setType(item));
          }}
        ></Dropdown>
        <div class="flexContainer">
          {Object.keys(pokemonsList).map((pokemonName, key) => (
            <Card
              key={key}
              name={pokemonName}
              imageSrc={imageSrcSelector(pokemonName)}
              info={{
                speed: getType("speed", pokemonName),
                specialDefense: getType("specialDefense", pokemonName),
                specialAttack: getType("specialAttack", pokemonName),
                defense: getType("defense", pokemonName),
                weight: getType("weight", pokemonName),
                height: getType("height", pokemonName),
                type: getType("type", pokemonName),
                attack: getType("attack", pokemonName),
                hp: getType("hp", pokemonName)
              }}
              ability={{
                normal: getAvailabity("Normal", pokemonName),
                hidden: getAvailabity("Hidden", pokemonName)
              }}
            ></Card>
          ))}
        </div>
      </div>
    );
  else return null;
};
