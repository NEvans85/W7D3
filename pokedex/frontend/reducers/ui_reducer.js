import {SHOW_ONE_POKEMON} from '../actions/pokemon_actions';
import { merge} from 'lodash';

const uiReducer = (state, action)=>{
  Object.freeze(state);
  switch (action.type) {
    case SHOW_ONE_POKEMON:
      return merge({}, state, uiState);
    default:
      return state;
  }
};

const uiState = (action) => {
  return ({
    pokeDisplay: action.pokemon.pokemon.id,

  });
};

export default uiReducer;
