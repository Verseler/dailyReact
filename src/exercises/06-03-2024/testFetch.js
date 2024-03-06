useEffect(() => {
  getUsers();
}, []);


const getUsers = async ()  => {
  try {
    const url = "http://localhost:5000/users";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  } 
  catch(error) {
    console.log(error)
  }
}
