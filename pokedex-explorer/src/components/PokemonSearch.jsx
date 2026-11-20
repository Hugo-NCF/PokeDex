
 // Pokemon Search component that allows users to search for Pokemon by name.
 function PokemonSearch(props) {
    // Get the current search text from props.
    const searchText = props.searchText;

    // Get the function that handles typing from props.
    const onSearchChange = props.onSearchChange;

    return (
        <section>
            <h2>Search Pokemon</h2>

            {/* Create a label for the search input. */}
            <label htmlFor="pokemon-search">Search by name:</label>

            {/* Create a text input that updates the search text. */}
            <input
                id="pokemon-search"
                type="text"
                placeholder="Enter Pokemon name"
                value={searchText}
                onChange={(event) => onSearchChange(event.target.value)}
            />
        </section>
    );
}

export default PokemonSearch;
