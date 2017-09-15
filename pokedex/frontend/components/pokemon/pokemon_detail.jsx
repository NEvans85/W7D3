import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.targetPokemon = props.pokemon[props.match.params.pokemonId];
  }

  componentWillReceiveProps(newProps) {
    this.props.requestOnePokemon(newProps.match.params.pokemonId);
  }

  render() {
    return (
      <div>{this.targetPokemon.name}</div>
    );
  }
}

export default PokemonDetail;
