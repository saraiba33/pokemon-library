const main = document.querySelector("main")
const spinner = document.querySelector(".spinner")


function getPokemon(pokemon) {
    const div = document.createElement("div")
    const pokemonContent = `
        <h3 class="poke-name">${pokemon.name} #0${pokemon.id}</h3>
        <img class="poke-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <p class="ability-title" >Abilities</p>
        <p class="type-title" >Type</p>
        <ul class="type-group">
            <li classs="type1">${pokemon.types.map((type) => type.type.name).slice(0, 1)}</li>
            <li classs="type2">${pokemon.types.map((type) => type.type.name).slice(1, 2)}</li>
        </ul>
        <ul class="ability-group">
            <li classs="ability-name1">${pokemon.abilities.map((ability) => ability.ability.name).slice(0, 1)}</li>
            <li classs="ability-name2">${pokemon.abilities.map((ability) => ability.ability.name).slice(1, 2)}</li> 
        </ul> 
        <img class="filler-image" src="images/logo-pokedex.png" />
        `
    div.innerHTML = pokemonContent
    main.append(div)
    div.classList.add("pokemon-details")
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