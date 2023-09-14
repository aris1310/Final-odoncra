import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [detail,setDetail]=useState({})
  const params = useParams()

  const url ="https://jsonplaceholder.typicode.com/users/" + params.id
  useEffect(() => {
    axios(url)
    .then((response) => setDetail(response.data))
  },[])
  return (
    <>
    <h3>{detail.name}</h3>
    <h3>{detail.phone}</h3>
    <h3>{detail.email}</h3>
    <h3>{detail.website}</h3>
    </>  
  )
}

export default Detail