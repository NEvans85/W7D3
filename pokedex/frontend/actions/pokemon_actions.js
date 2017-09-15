import * as APIUtil from '../util/API_util';

export const INDEX_ALL_POKEMON = 'INDEX_ALL_POKEMON';
export const SHOW_ONE_POKEMON = 'SHOW_ONE_POKEMON';

export const indexAllPokemon = pokemon => ({
    type: INDEX_ALL_POKEMON,
    pokemon
});

export const showOnePokemon = pokemon => ({
  type: SHOW_ONE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.getAllPokemon()
    .then(pokemon => dispatch(indexAllPokemon(pokemon)))
);

export const requestOnePokemon = (pokeId) => (dispatch) => (
  APIUtil.getOnePokemon(pokeId)
    .then(pokemon => dispatch(showOnePokemon(pokemon)))
);
