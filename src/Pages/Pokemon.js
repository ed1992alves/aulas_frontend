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
import pokeball from "../Style/images/pokemon/pokeball.png";
import "../Style/card.less";
import { useParams } from "react-router-dom";
import { addPokemon, navigation } from "../Redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPokemonBySelectedId,
  getCurrentPage,
  getPokemonID
} from "../Redux/selectors";

const PokemonPage = props => {
  const { id, pokemon, addPokemon, navigation, url } = props;
  const [fetched, setFetched] = useState(false);

  const previous = `/pokemon/${pokemon.id - 1}`;
  const next = `/pokemon/${pokemon.id + 1}`;

  const urlBuilder = (type, full) => {
    switch (type) {
      case "previous": {
        let id = pokemon.id;
        if (id === 1) id = 2;
        return full
          ? `${window.location.origin}/pokemon/${id - 1}`
          : `/pokemon/${id - 1}`;
      }
      case "next":
        return full
          ? `${window.location.origin}/pokemon/${pokemon.id + 1}`
          : `/pokemon/${pokemon.id + 1}`;
    }
  };

  const imageSrcSelector = () => {
    switch (pokemon?.name) {
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
        return pokemon?.sprites?.front_default || pokeball;
    }
  };

  function getType(type) {
    if (!Object.keys(pokemon).length) return;
    switch (type) {
      case "speed":
        return pokemon?.stats[0]?.base_stat;
      case "specialDefense":
        return pokemon?.stats[1]?.base_stat;
      case "specialAttack":
        return pokemon?.stats[2]?.base_stat;
      case "defense":
        return pokemon?.stats[3]?.base_stat;
      case "attack":
        return pokemon?.stats[4]?.base_stat;
      case "hp":
        return pokemon?.stats[5]?.base_stat;
      case "weight":
        return pokemon?.weight;
      case "height":
        return pokemon?.height;
      case "type":
        return pokemon?.types[pokemon?.types.length - 1]?.type?.name;
      default:
        return;
    }
  }

  function getAvailabity(type) {
    const ability = pokemon?.abilities?.find(
      ability =>
        (type == "Normal" && !ability.is_hidden) ||
        (type == "Hidden" && ability.is_hidden)
    );

    return ability?.ability?.name;
  }

  async function fetchPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(async res => res.json())
      .then(async res => {
        let value = { ...res };
        addPokemon(value, (name = res?.name));
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (!url) navigation();
    console.log(pokemon);
    if (!Object.keys(pokemon).length) fetchPokemon();
  }, [pokemon, url]);

  return (
    <div className="pokemonPageWrapper">
      <div class="blockContainer">
        <Card
          name={pokemon?.name}
          imageSrc={imageSrcSelector(name)}
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
      </div>
      <div class="buttonWrapper">
        <button>
          <Link
            to={urlBuilder("previous")}
            onClick={() => navigation(urlBuilder("previous", true))}
          >
            Previous
          </Link>
        </button>
        <button>
          <Link
            to={urlBuilder("next")}
            onClick={() => navigation(urlBuilder("next", true))}
          >
            Next
          </Link>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    id: getPokemonID(state),
    pokemon: getPokemonBySelectedId(state),
    url: getCurrentPage(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPokemon: (value, name) => {
      dispatch(addPokemon(value, name));
    },
    navigation: url => {
      dispatch(navigation(url));
    }
  };
};

export const PokemonPageWithPokemonName = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage);
