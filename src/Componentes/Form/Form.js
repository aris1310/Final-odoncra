


const Form = ({setEnv,setError,info,setInfo}) => {

  



  const handleChange = (e)=>{
    setInfo({
    ...info,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (info.name.length>5 && info.email.endsWith(".com")) {
      setEnv(true)
      setError(false)
    }else{
      setError(true)
      setEnv(false)
    }
  }

  
  
  return (
  
  <form onSubmit={handleSubmit}>
    <input type="text" name='name' placeholder='Full Name' onChange={handleChange}/>
    <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
    <button>Send</button>
  </form>
  
  )
}

export default Form