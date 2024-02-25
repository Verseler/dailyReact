import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleInput(event) {
    setForm(prevForm => ({...prevForm, [event.target.name]: [event.target.value]}))
  }

  axios.defaults.withCredentials = true;
  
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/login', form)
    .then(res => {
      if(res.data.Login) {
        navigate("/");
      }
      else {
        alert("No record")
      }
      console.log(res);
 
    })
    .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input className='border' type="text" name="email" value={form.username} onChange={handleInput} />
      </label>
      <br />
      <label>
        Password:
        <input className='border' type="password" name="password" value={form.password} onChange={handleInput} />
      </label>
      <br />
      <input className='p-2 bg-red-200' type="submit" value="Submit" />
    </form>
  )
}
