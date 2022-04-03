const pokedex = document.querySelector(".pokedex")


const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 50; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokeman => `
    <li class="card">
        <img class="card-image" src="${pokeman.image}" alt="poke card"/>
        <p class="card-number">#0${pokeman.id}</p>
        <h3 class="card-title">${pokeman.name}</h3>
        <p class="card-subtitle">Type: ${pokeman.type}</p>
    </li>
    `)
        .join('')
    pokedex.innerHTML = pokemonHTMLString
};

fetchPokemon();



const img = document.createElement("img");
img.src = "https://user-images.githubusercontent.com/33485290/43087793-f370302a-8ea0-11e8-8dcb-e35b1b33c9a2.png"
const header = document.querySelector("header");
header.append(img);
img.classList.add("header-image");


// const main = document.querySelector("main")
// main.classList.add("content-wrapper")