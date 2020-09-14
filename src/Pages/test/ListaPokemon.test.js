import { ListaPokemon } from "../ListaPokemon";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStoreWithInitialState } from "../../Redux/store";
import React from "react";
import * as actions from "../../Redux/actions";

jest.spyOn(actions, "setType");

const state = {
  pokemonList: {
    pikachu: {
      id: 15,
      types: [{ type: { name: "electric" } }],
      stats: [
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        }
      ]
    },
    charizard: {
      id: 60,
      types: [{ type: { name: "fire" } }],
      stats: [
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        }
      ]
    }
  },
  list: {
    start: 10,
    end: 80,
    type: "All"
  }
};

const store = createStoreWithInitialState(state);

describe("ListaPokemon", () => {
  it("snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <ListaPokemon startId={10} endId={20}></ListaPokemon>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("logic", () => {
    const { getByTestId, getAllByTestId, rerender } = render(
      <Provider store={store}>
        <ListaPokemon startId={10} endId={20}></ListaPokemon>
      </Provider>
    );
    expect(getAllByTestId("card").length).toBe(2);
    getByTestId("dropdownButton").click();
    fireEvent.click(getAllByTestId("dropdownButtonOption")[4]);

    expect(actions.setType).toHaveBeenNthCalledWith(1, "Fire");

    rerender(
      <Provider store={store}>
        <ListaPokemon startId={10} endId={20}></ListaPokemon>
      </Provider>
    );
    expect(getAllByTestId("card").length).toBe(1);
  });
});
