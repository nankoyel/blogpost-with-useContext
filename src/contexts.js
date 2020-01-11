import React from 'react';

export const ThemeContext = React.createContext({
    primaryColor: 'deepskyblue',
    secondaryColor: 'pink'
})


export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})