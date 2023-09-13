
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 8;
let offset = 0;
const maxRecord = 251;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <button class="pokemonBtn">
                    <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <div class="images">
                            <img class="image2" src="/../pokeball_icon.png">
                            <img class="image1" src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </div>
                    </li>
                </button>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    debugger
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecord){
        const newLimit =  maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
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
