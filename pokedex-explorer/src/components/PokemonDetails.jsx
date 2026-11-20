
 // Pokemon Details component that displays info about a selected Pokemon.
 function PokemonDetails(props) {
  // Get the selected Pokemon from props.
  const selectedPokemon = props.selectedPokemon;

  // Check whether a Pokemon has been selected.
  const isSelected = selectedPokemon !== null && selectedPokemon !== undefined;

  // If nothing is selected, display a message
  // asking the user to choose a Pokemon.
  if (!isSelected) {
    return (
      <section className="pokemon-details-section">
        <h2>Pokemon Details</h2>
        <p>Please select a Pokémon to see its details.</p>
      </section>
    );
  }

  return (
    <section className="pokemon-details-section">
      <h2>Pokémon Details</h2>

      {/* Display the selected Pokemon name. */}
      <h3>{selectedPokemon.name}</h3>

      {/* Display its image. */}
      <img
        src={selectedPokemon.imageUrl}
        alt={selectedPokemon.name}
      />

      {/* Display its abilities. */}
      <h4>Abilities:</h4>
      <p>{selectedPokemon.abilities.join(", ")}</p>

      {/* Display its base stats. */}
      <h4>Base Stats:</h4>
      <ul>
        <li>HP: {selectedPokemon.stats.hp}</li>
        <li>Attack: {selectedPokemon.stats.attack}</li>
        <li>Defense: {selectedPokemon.stats.defense}</li>
        <li>Speed: {selectedPokemon.stats.speed}</li>
      </ul>
    </section>
  );
}

export default PokemonDetails;
