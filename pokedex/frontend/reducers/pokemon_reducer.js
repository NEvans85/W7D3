import {INDEX_ALL_POKEMON, SHOW_ONE_POKEMON,
        showOnePokemon, indexAllPokemon} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case INDEX_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case SHOW_ONE_POKEMON:
      // return merge({}, state, action.pokemon);
      const newState = merge({}, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
