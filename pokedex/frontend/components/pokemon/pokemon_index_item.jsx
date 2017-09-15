import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({poke}) => {
  const pokePath = `/pokemon/${poke.id}`;
  return (
  <Link to={pokePath}>
    <li key={poke.id}>
      {poke.id}
      <img className='small-poke-pic' src={poke.image_url} />
      {poke.name}
    </li>
  </Link>
);};
