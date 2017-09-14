import * as APIUtil from '../util/API_util'

export const INDEX_ALL_POKEMON = 'INDEX_ALL_POKEMON'

export const indexAllPokemon = pokemon => ({
    type: INDEX_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.getAllPokemon()
    .then(pokemon => dispatch(indexAllPokemon(pokemon)))
)
