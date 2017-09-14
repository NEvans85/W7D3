export const getAllPokemon = () => {
  return (
    $.ajax({
      url: 'api/pokemon',
      method: "GET"
    })
  )
}
