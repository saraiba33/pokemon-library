const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_shiny'],
                type: data.types.map(type => type.type.name).join()
            };


            console.log(pokemon)
        });

};

getPokemon();