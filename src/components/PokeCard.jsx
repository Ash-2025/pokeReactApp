import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../util/FetchPokemon'

export default function PokeCard(props) {
    const { name, url } = props.props;

    const [pokeObj, setpokeObj] = useState(null)

    useEffect(() => {
        const idfetch = async () => {
            const pokeobj = await fetchPokemon(url)
            setpokeObj(pokeobj);
        }

        idfetch()
    }, [url])

    return (
        <div className='text-white border-2 border-white rounded-lg w-full h-auto flex justify-evenly p-2'>
            {
                pokeObj &&
                <>
                    <img src={pokeObj.sprites.front_default} alt="Image" />
                    <div className='font-inter font-bold text-lg md:text-xl h-full'>
                        <h2>{pokeObj.id}. {name}</h2>
                        <p>Order: {pokeObj.order}</p>
                        <p>Base Experience: {pokeObj.base_experience}</p>
                        <p>Height: {pokeObj.height}</p>
                        <p>Weight: {pokeObj.weight}</p>
                    </div>
                </>
            }

        </div>
    )
}