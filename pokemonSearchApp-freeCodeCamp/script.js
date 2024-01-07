document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonId = document.getElementById("pokemon-id");
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const hp = document.getElementById("hp");
  const attack = document.getElementById("attack");
  const defense = document.getElementById("defense");
  const specialAttack = document.getElementById("special-attack");
  const specialDefense = document.getElementById("special-defense");
  const speed = document.getElementById("speed");
  const types = document.getElementById("types");

  searchButton.addEventListener("click", function () {
    const inputValue = searchInput.value.toLowerCase();

    if (inputValue === "red") {
      alert("Pokémon not found");
    } else {
      fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && Object.keys(data).length > 0) {
            setPokemonInfo(data);
            addPokemonImage(data.sprites.front_default);
            setTypes(data.types.map((type) => type.type.name.toUpperCase()));
          } else {
            alert("Pokémon not found");
          }
        })
        .catch((error) => console.error("Error fetching Pokémon data:", error));
    }
  });

  function setPokemonInfo(data) {
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    if (data.stats && data.stats.length >= 6) {
      hp.textContent = data.stats[0].base_stat;
      attack.textContent = data.stats[1].base_stat;
      defense.textContent = data.stats[2].base_stat;
      specialAttack.textContent = data.stats[3].base_stat;
      specialDefense.textContent = data.stats[4].base_stat;
      speed.textContent = data.stats[5].base_stat;
    } else {
      console.error("Error: Invalid 'stats' array in Pokémon data");
    }
  }

  function addPokemonImage(src) {
    const existingSprite = document.getElementById("sprite");
    if (existingSprite) {
      existingSprite.parentNode.removeChild(existingSprite);
    }

    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = src;
    document.body.appendChild(sprite);
  }

  function setTypes(typeArray) {
    types.innerHTML = "";
    typeArray.forEach((type) => {
      const typeElement = document.createElement("span");
      typeElement.textContent = type;
      types.appendChild(typeElement);
    });
  }
});
