
// Pokemon Card component that displays a Pokemon's image, name, and type(s).
function PokemonCard(props) {
  // Get the Pokemon information from props.
  const name = props.name;
  const imageUrl = props.imageUrl;
  const types = props.types;

  // Get the function for selecting a Pokemon.
  const onSelect = props.onSelect;

  return (
    <article className="pokemon-card">
      {/* Make the entire Pokemon card clickable. */}
      <button
        type="button"
        className="pokemon-card-button"
        onClick={onSelect}
      >
        {/* Display the Pokemon image. */}
        <img src={imageUrl} alt={name} />

        {/* Display the Pokemon name and types. */}
        <h3>{name}</h3>
        <p>Type: {types.join(", ")}</p>
      </button>
    </article>
  );
}

export default PokemonCard;
