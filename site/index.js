const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

};

getPokemon();