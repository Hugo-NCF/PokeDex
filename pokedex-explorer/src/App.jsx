
import { useState, useEffect } from "react";

import PageHeader from "./components/PageHeader.jsx";
import PokemonSearch from "./components/PokemonSearch.jsx";
import PokemonList from "./components/PokemonList.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";

import "./App.css";

// Convert the API data into a simpler Pokemon object.
function createPokemonObject(pokemonData) {
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.front_default,

    // Get the Pokemon types and abilities.
    types: pokemonData.types.map((type) => type.type.name),
    abilities: pokemonData.abilities.map((ability) => ability.ability.name),

    // Get the Pokemon's base stats.
    stats: {
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      speed: pokemonData.stats[5].base_stat
    }
  };
}

// Main App component.
function App() {
  // Store all the Pokemon loaded from the API.
  const [pokemonArray, setPokemonArray] = useState([]);

  // Store what the user types in the search bar.
  const [searchText, setSearchText] = useState("");

  // Store the Pokemon selected by the user.
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Check if the Pokemon are still loading.
  const [loading, setLoading] = useState(true);

  // Store an error message if something goes wrong.
  const [errorMessage, setErrorMessage] = useState("");

  // Load Pokemon data when the page first opens.
  useEffect(() => {
    async function loadPokemon() {
      try {
        // Get the first 30 Pokemon from PokeAPI.
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );

        // Check if the request worked.
        if (!response.ok) {
          throw new Error("Could not load Pokemon.");
        }

        // Convert the response into JavaScript data.
        const pokemonData = await response.json();

        // Create an empty array to store the Pokemon.
        const pokemonList = [];

        // Go through each Pokemon from the API.
        for (const pokemon of pokemonData.results) {

          // Get more information about this Pokemon.
          const detailResponse = await fetch(pokemon.url);

          if (!detailResponse.ok) {
            throw new Error("Could not load Pokemon details.");
          }

          // Convert the Pokemon details into JavaScript data.
          const pokemonDetails = await detailResponse.json();

          // Add the Pokemon to our list.
          pokemonList.push(createPokemonObject(pokemonDetails));
        }

        // Save the Pokemon list in React state.
        setPokemonArray(pokemonList);

      } catch (error) {
        // Display an error message if something fails.
        setErrorMessage(error.message);

      } finally {
        // Stop the loading message.
        setLoading(false);
      }
    }

    // Call the function to load the Pokemon.
    loadPokemon();
  }, []);

  // Filter Pokemon based on what the user searches.
  const filteredPokemon = pokemonArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Select a Pokemon when the user clicks its card.
  function handlePokemonSelect(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="app">
      <div className="pokedex">

        {/* Top Pokedex lights. */}
        <div className="pokedex-top">
          <div className="pokedex-light"></div>
          <div className="small-light red-light"></div>
          <div className="small-light yellow-light"></div>
          <div className="small-light green-light"></div>
        </div>

        {/* Display the page header and problem statement. */}
        <PageHeader
          title="Pokedex Explorer"
          description="Pokemon fans and beginners can have trouble finding basic information about different Pokemon in one place. This app makes it easier to search Pokemon and learn about their types, abilities, and stats."
        />

        {/* Main Pokedex screen. */}
        <main className="pokedex-screen">

          {/* Display the search bar. */}
          <PokemonSearch
            searchText={searchText}
            onSearchChange={setSearchText}
          />

          {/* Display loading or error messages. */}
          {loading && <p>Loading Pokemon...</p>}

          {errorMessage && <p>Error: {errorMessage}</p>}

          {/* Display Pokemon after loading finishes. */}
          {!loading && !errorMessage && (
            <>
              <PokemonList
                pokemonArray={filteredPokemon}
                onPokemonSelect={handlePokemonSelect}
              />

              <PokemonDetails
                selectedPokemon={selectedPokemon}
              />
            </>
          )}
        </main>

        {/* Bottom Pokedex controls. */}
        <div className="pokedex-bottom">
          <div className="pokedex-button"></div>
          <div className="pokedex-speaker"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
