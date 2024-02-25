import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.valid) {
        setName(res.data.username);
      }
      else {
        navigate('/login');
      }
    })
    .catch(err => console.log(err))
  })

  return <div>Welcome {name}</div>;
}