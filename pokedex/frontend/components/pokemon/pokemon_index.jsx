import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import {Route} from 'react-router-dom';
import PokemonDetail from './pokemon_detail_container';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    const pokemonIndexItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />);
    return(
      <section>
        <ul>
          {pokemonIndexItems}
        </ul>
        <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
      </section>
  );}
}

export default PokemonIndex;
