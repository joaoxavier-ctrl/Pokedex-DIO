
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
/*const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 20;
let offset = 0;
const maxRecord = 251;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                    
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
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

const openModalButton = document.querySelector(".li.pokemon.grass");

const lista = document.getElementsByClassName(".number");
lista = parseInt();

openModalButton.array.forEach((x) => {
    addEventListener("click", x);
});


  