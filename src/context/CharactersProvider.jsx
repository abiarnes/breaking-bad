import React from 'react';
import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [charId, setCharId] = useState(null);
    const [selected, setSelected] = useState({});
    const [modal, setModal] = useState(false);

    const baseUrl = 'https://www.breakingbadapi.com/api';
    
    useEffect(() => {
        const getCharacters = async () => {
            const url = `${baseUrl}/characters`;
            const { data } = await axios(url);
            setItems(data);
            setLoading(false);
        }
        getCharacters();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            if(!charId) return
            const url = `${baseUrl}/characters/${charId}`;
            const { data } = await axios(url);
            setSelected(data[0]);
        }
        getDetails();
    }, [charId])
  
    
    const handleCharId = id => {
        setCharId(id);
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    return (
        <CharactersContext.Provider
            value={{
                items,
                loading,
                setLoading,
                handleCharId,
                selected,
                modal,
                handleModalClick,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export { CharactersProvider };
export default CharactersContext;
