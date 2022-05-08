import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getCharacters = async () => {
            const url = `https://www.breakingbadapi.com/api/characters`;
            const { data } = await axios(url);
            setItems(data);
            setLoading(false);
        }
        getCharacters();
    }, [])

    return (
        <CharactersContext.Provider
            value={{
                items,
                loading,
                setLoading,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export { CharactersProvider };
export default CharactersContext;
