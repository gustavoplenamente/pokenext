export interface Resource {
    name: string,
    url: string
}

export interface PokedexDescription {
    description: string,
    language: Resource
}

export interface Pokedex {
    descriptions: PokedexDescription[],
    id: number,
    is_main_series: boolean,
    pokemon_entries: PokemonEntry[],
    region: {name: string, url: string},
    version_groups: Resource[]
}

export interface PokemonEntry {
    entry_number: number,
    pokemon_species: Resource
}
