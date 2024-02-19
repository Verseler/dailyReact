import { useEffect, useState } from "react";
import bgImage from "./assets/cover.jpg";

export default function MemoryCard() {
  const [characters, setCharacters] = useState([]);
  const [highestScores, setHighestScore] = useState(0);
  const [guessesChars, setGuessesChars] = useState([]);
  let score = guessesChars.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://rickandmortyapi.com/api/character";

    try {
      const response = await fetch(url);
      const data = await response.json();

      //get only 12 character results
      const filteredData = data.results.filter((result) => result.id <= 12);
      setCharacters(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  function restartGame() {
    setHighestScore((prevHighestScore) => {
      return prevHighestScore < score
        ? score
        : prevHighestScore;
    });
    setGuessesChars([])
  }

  function handleClickGuess(id) {
    //check if win current round
    if(score == 11) {
      alert("win the game");
      restartGame();
      return;
    }

    //check if guess is wrong
    if (guessesChars.includes(id)) {
      alert("game over");
      restartGame();
      return;
    }
    //or else win

    setGuessesChars([...guessesChars, id]);
    shuffleCharacters();
  }

  function shuffleCharacters() {
    setCharacters((draft) => draft.sort(() => 0.5 - Math.random()));
  }


  /* UI */

  const characterCards = characters.map((character) => (
    <div
      key={character.id}
      onClick={() => handleClickGuess(character.id)}
      className="p-2 text-center pointer rounded-2xl bg-[#97ce4c] aspect-square transition-all active:scale-95 hover:bg-lime-600"
    >
      <img className="rounded-xl" src={character.image} />
      <p className="py-2 overflow-hidden text-sm font-bold text-white whitespace-nowrap md:text-base xl:text-xl">
        {character.name}
      </p>
    </div>
  ));

  const scores = (
    <div className="flex gap-8 text-lg lg:text-2xl">
      <p>
        SCORE: <span className="text-amber-500">{score}</span>
      </p>
      <p>
        HIGH SCORE: <span className="text-amber-500">{highestScores}</span>
      </p>
    </div>
  );

  return (
    <div className="w-full h-screen tracking-widest font-creepster">
      {/*temporary bg image*/}
      <img className="fixed w-full h-full -z-10 cover" src={bgImage} />
      <div className="w-full h-full p-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-500">
              Rick and Morty Memory Game
            </h1>
            <p className="text-xs text-black md:text-sm lg:text-base">
              Get points by clicking on an image but don't click on any more
              than once!
            </p>
          </div>
          {scores}
        </div>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {characterCards}
        </div>
      </div>
    </div>
  );
}
