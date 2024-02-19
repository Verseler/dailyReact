import { useEffect, useState } from "react";
import { TimerIcon } from "lucide-react";

export default function Effect() {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setClock(draft => draft + 1);
    }, 1000);


    return () => {
      clearInterval(key)
    }
  }, [])

  
  return(<div className="flex gap-4 px-4 py-2 m-auto mt-10 bg-green-300 rounded-lg w-max"><TimerIcon />{" "}<span>{clock}</span></div>);
}