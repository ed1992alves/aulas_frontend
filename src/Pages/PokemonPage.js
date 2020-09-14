import React, { useState, useRef, useEffect, useReducer } from "react";
import { Dropdown, Card } from "../Components/index";
import pikachu from "../Style/images/pokemon/pikachu.png";
import blastoise from "../Style/images/pokemon/blastoise.png";
import charizard from "../Style/images/pokemon/charizard.png";
import flareon from "../Style/images/pokemon/flareon.png";
import vileplume from "../Style/images/pokemon/vileplume.png";
import bulbasaur from "../Style/images/pokemon/bulbasaur.png";
import gengar from "../Style/images/pokemon/gengar.png";
import alakazam from "../Style/images/pokemon/alakazam.png";
import "../Style/card.less";

const imageSrcSelector = selectedPokemon => {
  switch (selectedPokemon) {
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
      return;
  }
};

export const PokemonPage = () => {
  const pokemonList = [
    "pikachu",
    "charizard",
    "blastoise",
    "flareon",
    "bulbasaur",
    "gengar",
    "alakazam"
  ];
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);
  const [abilityState, setAbility] = useState({ type: "Normal" });
  const [pokemonState, setPokemonState] = useState({});

  function getAvailabity(type) {
    const ability = pokemonState[selectedPokemon]?.abilities.find(
      ability =>
        (type == "Normal" && !ability.is_hidden) ||
        (type == "Hidden" && ability.is_hidden)
    );

    return ability?.ability?.name;
  }

  function getType(type) {
    switch (type) {
      case "speed":
        return pokemonState[selectedPokemon]?.stats[0]?.base_stat;
      case "specialDefense":
        return pokemonState[selectedPokemon]?.stats[1]?.base_stat;
      case "specialAttack":
        return pokemonState[selectedPokemon]?.stats[2]?.base_stat;
      case "defense":
        return pokemonState[selectedPokemon]?.stats[3]?.base_stat;
      case "attack":
        return pokemonState[selectedPokemon]?.stats[4]?.base_stat;
      case "hp":
        return pokemonState[selectedPokemon]?.stats[5]?.base_stat;
      case "weight":
        return pokemonState[selectedPokemon]?.weight;
      case "height":
        return pokemonState[selectedPokemon]?.height;
      case "type":
        return pokemonState[selectedPokemon]?.types[
          pokemonState[selectedPokemon]?.types.length - 1
        ]?.type?.name;
      default:
        return;
    }
  }

  async function fetchAbility(abilities) {
    let auxAbility = {};
    Promise.all(
      abilities.map(async ability => {
        if (abilityState[(ability?.ability?.name)]) return;
        await fetch(ability.ability?.url)
          .then(res => res.json())
          .then(res => {
            auxAbility = { ...auxAbility, [ability?.ability?.name]: res };
            // console.log({ ...auxAbility, [ability?.ability?.name]: res });
          })
          .catch(error => console.log(error));
      })
    ).then(() => {
      //console.log("final", { ...abilityState, ...auxAbility });
      setAbility({ ...abilityState, ...auxAbility });
    });
  }

  async function fetchPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(async res => res.json())
      .then(async res => {
        setPokemonState({ ...pokemonState, [selectedPokemon]: res });
        fetchAbility(res.abilities);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (!pokemonState[selectedPokemon]) {
      fetchPokemon();
    }
  }, [selectedPokemon]);

  return (
    <div style={{ padding: "20px", height: "700px" }}>
      <Dropdown
        title="pokemon list"
        name="pokemon"
        items={pokemonList}
        selected={pokemonList[0]}
        callback={item => {
          setSelectedPokemon(item);
          setAbility({ ...abilityState, type: "Normal" });
        }}
      ></Dropdown>
      <div class="blockContainer">
        <Card
          name={pokemonState[selectedPokemon]?.name}
          imageSrc={imageSrcSelector(selectedPokemon)}
          callbackAbility={item => setAbility({ ...abilityState, type: item })}
          info={{
            speed: getType("speed"),
            specialDefense: getType("specialDefense"),
            specialAttack: getType("specialAttack"),
            defense: getType("defense"),
            weight: getType("weight"),
            height: getType("height"),
            type: getType("type"),
            attack: getType("attack"),
            hp: getType("hp")
          }}
          ability={{
            normal: getAvailabity("Normal"),
            hidden: getAvailabity("Hidden")
          }}
        ></Card>
        <div class="abilityWrapper">
          <h2>{getAvailabity(abilityState?.type)}</h2>
          <h3>
            {
              abilityState[getAvailabity(abilityState?.type)]?.effect_entries[0]
                ?.effect
            }
          </h3>
        </div>
      </div>
    </div>
  );
};
