import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);



    const AddTransaction = (transaction) => {
        dispatch({
            type: 'Add_transaction',
            payload: transaction
        })
    }

    const DeleteTransaction = (id) => {
        dispatch({
            type: 'Delete_transaction',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        AddTransaction,
        DeleteTransaction
    }}>

        {children}

    </GlobalContext.Provider>)
}