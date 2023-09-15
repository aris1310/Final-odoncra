import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'


const CharStates= createContext()

const reducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return {...state, favs: [...state.favs, action.payload]}
      default:
          throw new Error()
  }
}
const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
  favs: initialFavState,
  theme: ''
}


const Context = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

    const [char,setChar]= useState([])

    const url ="https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        axios(url)
        .then((response) => setChar(response.data))
    },[])

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs])





  return (
    <CharStates.Provider value={{char,state,dispatch}}>
        {children}
    </CharStates.Provider>
  )
}

export default Context

export const useCharStates = () => useContext(CharStates)