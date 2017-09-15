import {SHOW_ONE_POKEMON} from '../actions/pokemon_actions';
import { merge} from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_ONE_POKEMON:
      return merge({}, state, action.pokemon.items);
    default:
      return state;
  }
};

export default itemsReducer;
