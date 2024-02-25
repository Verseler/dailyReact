import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setForm(prevForm => ({...prevForm, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    axios.post("http://localhost:8081/signup", form)
    .then(res => {
      console.log(res);
      if(res.statusText == "OK") {
        navigate("/login")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input className="border" type="text" name="username" value={form.username} onChange={handleInput} />
      </label>
      <br />
      <label>
        Email:
        <input className="border" type="text" name="email" value={form.email} onChange={handleInput} />
      </label>
      <br />
      <label>
        Password:
        <input className="border" type="password" name="password" value={form.password} onChange={handleInput} />
      </label>
      <br />
      <input className="p-2 bg-red-200" type="submit" value="Submit" />
    </form>
  )
}
