const pokedex = document.querySelector(".pokedex")
const spinner = document.querySelector(".spinner")


function getPokemon(pokemon) {
    console.log(pokemon)
    const div = document.createElement("div")
    div.innerHTMl = `
    <a href="pokemon.html?pokemon=${pokemon.name}">
        <img src="${pokemon.image}" alt="${pokemon.name}" />
    </a>
    <p>
    "${pokemon.abilities}"</p>
    `
    pokedex.append(div)
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
//laoding image