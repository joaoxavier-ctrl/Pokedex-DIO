
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

//fetch funciona de modo similar a try-catch-finally
/*pokeApi.getPokemons().then((pokemons) => {
    const listItems = [];

    pokemon.map()

    for(let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];            
        listItems.push(convertPokemonToLi(pokemon))
    }
    pokemonList.innerHTML += convertPokemonToLi(pokemon)
})*/
