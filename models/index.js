const fs = require('fs')

const leitorDeArquivos = file => new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
        if (error) {
            reject(error)
        } else {
            resolve(content)
        }
    })
})

// Açucar sintático em cima da Promise -> async/await
const executar = async () => {
    const conteudoUm = await leitorDeArquivos('arquivos/um.txt')
    console.log(conteudoUm);

    const conteudoDois = await leitorDeArquivos('arquivos/dois.txt')
    console.log(conteudoDois);
}

executar()



const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i <= 10; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i).then(response => response.json())))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            const lisPokemons = pokemons.reduce((add, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                acc += `
            <li>
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
            <h2>${pokemon.id}: ${pokemon.name}</h2>
            <p>${types.join(' | ')}</p>
            </li>
            `
                return acc
            }, '')
            const ul = document.querySelector('pokemon')
            ul.innerHTML = lisPokemons;
        })
}

fetchPokemon();

module.exports = {
    consultaPokemon,
    executar
}

