import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'first text', amount: -10 },
        { id: 2, text: 'second text', amount: 30 },
        { id: 3, text: 'third text', amount: 20 },
        { id: 4, text: 'fourth text', amount: 20 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
            transactions: state.transactions 
        }}>

            {children}

        </GlobalContext.Provider>)
}