
import "./App.css";

import PageHeader from "./components/PageHeader.jsx";
import PokemonSearch from "./components/PokemonSearch.jsx";
import PokemonList from "./components/PokemonList.jsx";
import PokemonCard from "./components/PokemonCard.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";

function App() {
  return (
    <>
      <PageHeader />

      <main>
        <PokemonSearch />

        <PokemonList />

        <section>
          <h2>Example Pokémon Card</h2>
          <PokemonCard name="Pikachu" />
        </section>

        <PokemonDetails />
      </main>

      <footer>
        <p>Pokédex Explorer | React Project</p>
      </footer>
    </>
  );
}

export default App;
