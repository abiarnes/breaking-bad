import { useContext } from 'react';
import CharactersContext from '../context/CharactersProvider';

const useCharacters = () => {
    return useContext(CharactersContext)
}

export default useCharacters;