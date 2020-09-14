import { ListaPokemonWithPagination } from "../ListaPokemonWithPagination";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStoreWithInitialState } from "../../Redux/store";
import React from "react";
import * as actions from "../../Redux/actions";

jest.spyOn(actions, "setType");
jest.spyOn(actions, "setPage");

const state = {
  pokemonList: {
    pikachu: {
      id: 15,
      types: [{ type: { name: "electric" } }],
      stats: []
    },
    charizard: {
      id: 60,
      types: [{ type: { name: "fire" } }],
      stats: []
    },
    arcanine: {
      id: 90,
      types: [{ type: { name: "fire" } }],
      stats: []
    }
  },
  list: {
    page: "2",
    type: "electric",
    fetching: "Completed"
  }
};

const store = createStoreWithInitialState(state);

describe("ListaPokemonFinal", () => {
  it("snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <ListaPokemonWithPagination></ListaPokemonWithPagination>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it("logic", () => {
    const { getByTestId, getAllByTestId, rerender, container } = render(
      <Provider store={store}>
        <ListaPokemonWithPagination></ListaPokemonWithPagination>
      </Provider>
    );
    getByTestId("dropdownButton").click();
    fireEvent.click(getAllByTestId("dropdownButtonOption")[4]);

    expect(actions.setType).toHaveBeenNthCalledWith(1, "Fire");
    expect(actions.setPage).toHaveBeenNthCalledWith(1, 1);

    rerender(
      <Provider store={store}>
        <ListaPokemonWithPagination></ListaPokemonWithPagination>
      </Provider>
    );
    expect(getAllByTestId("card").length).toBe(2);
  });
});
