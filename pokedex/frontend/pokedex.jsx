
import React from 'react';
import ReactDOM from 'react-dom';
import {indexAllPokemon, requestAllPokemon} from './actions/pokemon_actions'
import {getAllPokemon} from './util/API_util'
import configureStore from './store/store.js'
import {selectAllPokemon} from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// Window binds
window.indexAllPokemon = indexAllPokemon;
window.getAllPokemon = getAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
