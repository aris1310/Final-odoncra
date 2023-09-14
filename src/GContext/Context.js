import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'


const CharStates= createContext()

const Context = ({children}) => {
    const [char,setChar]= useState([])

    const url ="https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        axios(url)
        .then((response) => setChar(response.data))
    },[])





  return (
    <CharStates.Provider value={char}>
        {children}
    </CharStates.Provider>
  )
}

export default Context

export const useCharStates = () => useContext(CharStates)