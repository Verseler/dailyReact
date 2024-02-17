import { useState } from "react";

export default function EventsExercise() {
  const [position, setPosition] = useState(null);
  const [answer, setAnswer] = useState("No");

  const reposition = () => {
    const containerWidth = parent.innerWidth;
    const containerHeight = parent.innerHeight;

    const randomTop = Math.floor(Math.random() * containerHeight);
    const randomRight = Math.floor(Math.random() * containerWidth);

    setPosition({ top: randomTop, right: randomRight });
  };

  return (
    <div className="relative grid w-full min-h-screen bg-red-100 place-items-center">
      {answer === "No" ? 
      (<div>
        <p className="mb-3 text-xl">Are you dumb?</p>
        <div className="space-x-4">
          <button
            onClick={() => setAnswer('Yes')}
            className={`px-4 py-2 rounded-md bg-green-300 active:scale-95`}
          >
            Yes
          </button>
          <button
            onMouseOver={reposition}
            style={{
              position: "absolute",
              top: position && `${position.top}px`,
              right: position && `${position.right}px`,
            }}
            className={`px-4 py-2 rounded-md bg-red-300 active:scale-95`}
          >
            No
          </button>
        </div>
      </div>):
      (<div className="bg-red-300 rounded-lg px-7 h-80 w-96">
        <video className="object-contain w-full h-full" autoPlay={true} playsInline="" muted="" loop={true} src="https://external-preview.redd.it/bWQSGWuE4SMTx6-2Zg7KZtsOGWL25B5OW7XfkPkR4M4.gif?format=mp4&amp;s=7e94d149ca48eef4e3e2077cfbd259b97269d3e8"></video>
      </div>)  
    }
    </div>
  );
}

/*
  src: 30daysofreact https://www.30daysofreact.com/posts/64c592c268fee3b99bf644d7
  topic: Events
  activity: Exercise 2
*/
