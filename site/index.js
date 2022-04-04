const pokedex = document.querySelector(".pokedex")
const spinner = document.querySelector(".spinner")

const getPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 50; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then((results) => {
        const allPokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            abilities: data.abilities.map((ability) => ability.ability.name).join(', ')
        }));
        displayPokemon(allPokemon);
    });
};

const displayPokemon = (allPokemon) => {
    console.log(allPokemon);
    const pokemonHTMLString = allPokemon.map(pokemon => `
    <li class="card">
        <a href="pokemon.html?pokemon=${pokemon.name}">
        <img class="card-image" src="${pokemon.image}" alt="${pokemon.name}"/>
        </a>
        <p class="card-number">#0${pokemon.id}</p>
        <h3 class="card-title">${pokemon.name}</h3>
        <p class="card-subtitle">${pokemon.type}</p>
    </li>
    `)
        .join('')
    spinner.classList.add("hidden")
    pokedex.innerHTML = pokemonHTMLString
};

const img = document.createElement("img");
img.src = "images/pokedex-img.jpg"
const header = document.querySelector("header");
header.append(img);
img.classList.add("header-image");



getPokemon();






// const main = document.querySelector("main")
// main.classList.add("content-wrapper")