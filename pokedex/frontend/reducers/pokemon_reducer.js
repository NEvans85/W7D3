import {INDEX_ALL_POKEMON, indexAllPokemon} from '../actions/pokemon_actions';
import {merge} from 'lodash'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case INDEX_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
