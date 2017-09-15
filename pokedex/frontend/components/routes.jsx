import React from 'react';
import PokemonIndex from './pokemon/pokemon_index_container';
import PokemonDetail from './pokemon/pokemon_detail_container';
import { Route } from 'react-router-dom';

const Routes = () => {
  return (
  <div>
    <Route path='/' component={PokemonIndex} />
    <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
  </div>
  );
};

export default Routes;
