const main = document.querySelector("main")
const spinner = document.querySelector(".spinner")


function getPokemon(pokemon) {
    const div = document.createElement("div")
    const pokemonContent = `
        <h3 class="poke-name">${pokemon.name} #0${pokemon.id}</h3>
        <p class="poke-number">#0${pokemon.id}</p>
        <img class="poke-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <p class="type">Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p classs="ability">Abilities: ${pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>        
        `
    div.innerHTML = pokemonContent
    main.append(div)
    div.classList.add("each-pokemon")

    console.log(pokemon)

}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        getPokemon(parsedResponse)
        spinner.classList.add("hidden")
    })


//Header image
const img = document.createElement("img");
img.src = "images/pokedex-img.jpg"
const header = document.querySelector("header");
header.append(img);
img.classList.add("header-image");