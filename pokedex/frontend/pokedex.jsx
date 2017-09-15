
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {getOnePokemon} from './util/API_util';
import {showOnePokemon, requestOnePokemon} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
  window.dispatch = store.dispatch;
  window.getState = store.getState;
});

window.getOnePokemon = getOnePokemon;
window.showOnePokemon = showOnePokemon;
window.requestOnePokemon = requestOnePokemon;
