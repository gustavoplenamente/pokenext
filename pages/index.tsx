import React from 'react';
import { Pokedex } from '../pokemon/pokemon-types';

export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2')
        .then((response: Response) => response.ok ? response.json() : null)
        .then((data: Pokedex) => data.pokemon_entries);

    return {
        props: {
            pokemons,
        },
    };
}

function Home({ pokemons }) {
    return (
        <div>
            Pokédex
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
