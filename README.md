# Pokédex Explorer

**Created by:** Hugo Cruz

## Project Overview

Pokédex Explorer is a React web application that allows users to browse and search Pokémon. The app retrieves information from the PokéAPI and displays each Pokémon's name, image, types, abilities, and base stats.

I created this project to practice working with React components, props, state management, and fetching data from an external API.

## Features

- Browse the first 30 Pokémon from PokéAPI.
- Search Pokémon by name.
- View Pokémon images and types.
- Click a Pokémon to see its abilities and base stats.
- Display loading and error messages.
- Display a message when no Pokémon match the search.

## Technologies Used

- React
- JavaScript
- HTML and CSS
- Vite
- PokéAPI

## React Components

- **App.jsx:** Main component that manages Pokémon data, search, loading, errors, and selection.
- **PageHeader.jsx:** Displays the application's header.
- **PokemonSearch.jsx:** Allows users to search for Pokémon.
- **PokemonCard.jsx:** Displays an individual Pokémon's image, name, and types.
- **PokemonList.jsx:** Displays the collection of Pokémon cards.
- **PokemonDetails.jsx:** Displays additional information about a selected Pokémon.

## How to Run the Project

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL provided in the terminal.

## Data Source

This application uses the free [PokéAPI](https://pokeapi.co/) to retrieve Pokémon information.

## What I Learned

Through this project, I practiced splitting a React application into reusable components, passing data through props, and using `useState` and `useEffect`.

I also gained experience fetching data from an API, displaying lists using `.map()`, filtering arrays, and using conditional rendering to update the interface.

## Author

Hugo Cruz

New College of Florida — Computer Science
