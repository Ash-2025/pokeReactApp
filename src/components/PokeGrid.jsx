import { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import axios from 'axios';
import Button from './Button';

export default function PokeGrid() {
    const [offset, setoffset] = useState(0);
    const limit = 32;
    const [pokemon, setpokemon] = useState({});
    const [searchinput, setsearchinput] = useState('');
    const [searchResults, setsearchResult] = useState(null);

    useEffect(() => {
        const initialFetch = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            setpokemon(res.data);
        }
        initialFetch();
    }, [offset])

    const nexthandler = () => {
        setoffset(offset + 32);
    }
    const prevhandler = () => {
        if (offset > 32) {
            setoffset(offset - 32);
        } else {
            setoffset(0);
        }
    }

    const searchpokemon = () => {
        console.log(`im in function`);
        console.log(pokemon.results.length);

        if (pokemon && pokemon.results.length > 0) {
            const results = pokemon.results.filter(res => res.name.toLowerCase() === searchinput.toLowerCase())
            if (results.length > 0) {
                setsearchResult(results)
            } else {
                console.log('this is working...');
                setsearchResult([]);
            }
        }
    }
    const setnull = () => {
        setsearchResult(null);
    }
    return (
        <>
            <div className='flex flex-col items-center md:flex-row md:items-end gap-2'>
                <input
                    type="text"
                    className='max-w-fit h-14 bg-black text-white text-lg md:text-2xl focus:outline-none caret-white border-b-2 border-white font-roboto'
                    value={searchinput}
                    onChange={(e) => {
                        setsearchinput(e.target.value)
                        console.log(e.target.value);
                    }}
                />

                <div className='flex flex-col md:flex-row gap-4'>
                    <Button 
                        name="Search"
                        handleClick={searchpokemon}
                    />
                    <Button 
                        name="Reset"
                        handleClick={setnull}
                        isDisabled={searchResults==null ? 'true':'false'}
                    />
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-content-center py-10 px-5'>


                {searchResults !== null ? (
                    searchResults.length > 0 ? (
                        searchResults.map((res, index) => (
                            <div key={index} className='w-auto flex justify-center'>
                                <PokeCard props={{ name: res.name, url: res.url }} />
                            </div>
                        ))
                    ) : (
                        <p className='text-white'>No results found...</p>
                    )
                ) : (
                    pokemon && pokemon.results ? (
                        pokemon.results.map((res, index) => (
                            <div key={index} className='w-auto flex justify-center'>
                                <PokeCard props={{ name: res.name, url: res.url }} />
                            </div>
                        ))
                    ) : (
                        <p className='text-white'>Loading...</p> // Or any other loading indicator
                    )
                )}
            </div>
            <div className='w-full h-auto flex justify-center items-center gap-8 pt-2 pb-5'>
                <Button
                    name="Prev"
                    handleClick={prevhandler}
                    isDisabled={offset > 32 ? 'false' : 'true'}
                />
                <Button
                    name="Next"
                    handleClick={nexthandler}
                />
            </div>
        </>
    )
}