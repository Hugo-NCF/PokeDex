
import PokemonCard from "./PokemonCard.jsx";

// PokemonList component that displays a list of Pokemon cards.
function PokemonList(props) {
  // Get the Pokemon array and selection function.
  const pokemonArray = props.pokemonArray;
  const onPokemonSelect = props.onPokemonSelect;

  // Check whether the array is empty.
  const isEmpty = pokemonArray.length === 0;

  return (
    <section className="pokemon-collection">
      <h2>Pokemon Collection</h2>

      {isEmpty ? (
        <p>No Pokemon found.</p>
      ) : (
        <div className="pokemon-grid">
          {/* Create a card for each Pokemon. */}
          {pokemonArray.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              types={pokemon.types}
              onSelect={() => onPokemonSelect(pokemon)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PokemonList;
