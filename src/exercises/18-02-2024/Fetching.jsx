import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function Fetching() {
  const url = "https://api.thecatapi.com/v1/images/search?breed_id=abys";
  // const data = useFetch(url); --this is best for single fetch on first load of the page
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //manual fetching
  const fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?breed_id=abys";
    try {
      const response = await fetch(url);
    const newData = await response.json();
    setData(newData)
    } 
    catch (error) {
      console.log(error)
    }
  };


  

  return (
    <>
      <h1>Random Cat</h1>
      <div className="w-64 h-64 border-4 border-red-400">
      {data && data.map(cat => <img key={cat.id} src={cat.url} className="object-cover w-full h-full" />)}
      </div>
      <button onClick={fetchData} className="px-4 py-2 bg-red-100 border-2 border-red-200 rounded-md active:scale-95">Get Random Cat</button>
    </>
  );
}
