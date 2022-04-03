const pokedex = document.querySelector(".pokedex")
const spinner = document.querySelector(".spinner")

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
            type: data.types.map((type) => type.type.name).join(', '),
            abilities: data.abilities.map((ability) => ability.ability.name).join(', ')
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokeman => `
    <li class="card">
        <a href="pokemon.html?pokemon=${pokeman.name}">
        <img class="card-image" src="${pokeman.image}" alt="${pokeman.name}"/>
        </a>
        <p class="card-number">#0${pokeman.id}</p>
        <h3 class="card-title">${pokeman.name}</h3>
        <p class="card-subtitle">${pokeman.type}</p>
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



fetchPokemon();






// const main = document.querySelector("main")
// main.classList.add("content-wrapper")