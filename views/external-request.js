const fetchPokemon = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []

  for (let i = 1; i <= 10; i++) {
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      const lisPokemons = pokemons.reduce((acc, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        acc += `
          <li>
          <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="100px">
          <h2>${pokemon.id}: ${pokemon.name}</h2>
          <p>${types.join(' | ')}</p>
          </li>
          `
        return acc
      }, '')
      const ul = document.querySelector('.pokemon')
      ul.innerHTML = lisPokemons;
    })
}

fetchPokemon();