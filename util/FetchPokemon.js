import axios from 'axios'
export async function fetchPokemon(url) {
    const res = await axios.get(url);
    const { base_experience, cries, height, hed_items, id, order, past_abilities, sprites, weight } = res.data;

    return {
        base_experience, cries, height, hed_items, id, order, past_abilities, sprites, weight
    }
}