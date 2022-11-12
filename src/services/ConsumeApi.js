const endpoints = {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
};

export const getCharacters = async (page) => {
    const response = await fetch(`${endpoints.characters}?page=${page}`);
    const data = await response.json();
    return data.results;
};

export const getCharacterInfo = async (characterId) => {
    const response = await fetch(`${endpoints.characters}/${characterId}`);
    return await response.json();
};