import { useEffect, useState } from "react";

export default function Fetching() {
  const [cat, setCat] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?breed_id=abys";
    const response = await fetch(url);
    const newData = await response.json();
    setCat(newData);
  };

  return (
    <>
      <h1>Random Cat</h1>
      <div className="w-64 h-64 border-4 border-red-400">
      {cat && cat.map(cat => <img key={cat.id} src={cat.url} className="object-cover w-full h-full" />)}
      </div>
      <button onClick={fetchData} className="px-4 py-2 bg-red-100 border-2 border-red-200 rounded-md active:scale-95">Get Random Cat</button>
    </>
  );
}
