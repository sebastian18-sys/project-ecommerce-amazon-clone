import React, { createContext, useContext, useReducer } from 'react'

// Preparetes datalayer
export const StateContext = createContext();

// wrap out app and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the datalayer
export const useStateValue = () => useContext(StateContext);