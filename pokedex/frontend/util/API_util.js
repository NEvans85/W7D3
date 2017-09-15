export const getAllPokemon = () => {
  return (
    $.ajax({
      url: 'api/pokemon',
      method: "GET"
    })
  );
};

export const getOnePokemon = (pokeId) => {
  return (
    $.ajax ({
      url: `api/pokemon/${pokeId}`,
      method: "GET"
    })
  );
};
