import React, { useState } from 'react'
import Form from '../../Componentes/Form/Form'

const Contact = () => {
  const [info,setInfo]= useState({
    name:'',
    email:''
  })
  const [env,setEnv]= useState(false)
  const [error,setError]= useState(false)
  return (<>
  
  <h2>What to know more?</h2>
  <h3>Send or you question</h3>
  <Form setEnv={setEnv} setError={setError} info={info} setInfo={setInfo}/>
  {error && <h3>Por favor verifique su información nuevamente</h3>}
  {env && <h3>Gracias {info.name}, te contactaremos cuando antes vía</h3>}
</>)
}

export default Contact