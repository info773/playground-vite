import { type FormEvent, type ChangeEvent, useState } from "react";

export default function Form() {
  const [playerChoice, setPlayerChoice]=useState<number>();
  const [computerChoice, setComputerChoice]=useState<number>();
  const [counter, setCounter] = useState<number>();
  const [displayText, setDisplayText] = useState("Good Luck :)");
  const [gameStatus, setGameStatus] = useState("Press Play!")
  const [difficulty, setDifficulty] = useState<number>(7);
  const [playText, setPlayText] = useState("Play");

  let difficultyText: string = "";

  if (difficulty === 7) difficultyText = "Easy";
  if (difficulty === 5) difficultyText = "Medium";
  if (difficulty === 3) difficultyText = "Hard";


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  function handlePlay() {
    const randNum = Math.floor(Math.random() * 10) + 1;
    setComputerChoice(randNum);
    if (difficulty !== undefined) setCounter(difficulty-1);
    setGameStatus(difficultyText + ' game started! ' + difficulty + " tries total!")
    setDisplayText("Computer chose his secret number! Counter is set to " + difficulty)
    setPlayText("Restart")
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {

    setPlayerChoice(Number(e.target.value))
  }

  function handleGuess() {

    if (playerChoice === undefined) {
      return setDisplayText("You have not chosen a number!")
    } else if (computerChoice === undefined) {
      return setDisplayText("Press 'Play' before playing.")
    } else if (counter === undefined) {
      return setDisplayText("");
    }
    
    if (counter > 0) {
      if (playerChoice === computerChoice) {
        setPlayText("Play again");
        setGameStatus("Game won :)")
        return setDisplayText(`You won! The number was ${computerChoice}.`)
      } else if (playerChoice > computerChoice) {
        setCounter(counter-1);
        return setDisplayText(`${playerChoice} is too big! ${counter} tries left.`)
      } else {
        setCounter(counter-1);
        return setDisplayText(`${playerChoice} is too small! ${counter} tries left.`)
      }
    }
    else {
      if (playerChoice === computerChoice) {
        setPlayText("Play again");
        setGameStatus("Game won :)")
        return setDisplayText(`You won! The number was ${computerChoice}.`)
      } else {
        setPlayText("Play again");
        setDisplayText("Game Over. Play again.")
        setGameStatus("Game Over :(")
      }
    }
  }

  return (
    <div>
      <div className="mb-10 border-b">
        <button onClick={handlePlay} className="m-4 p-2 border rounded-md">{playText}</button>
        <select onChange={e => setDifficulty(Number(e.target.value))} className="border rounded-md">
          <option value="7">easy (7 tries)</option>
          <option value="5">medium (5 tries)</option>
          <option value="3">hard (3 tries)</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={playerChoice} onChange={handleInput} type="text" placeholder="Guess here ..." className="m-4 border rounded-md w-[50px]"/>
        <button onClick={handleGuess} className="p-2 border rounded-md">Guess</button>
      </form>
      <p className="m-4 text-[12px]">Status: {gameStatus}</p>
      <p className="m-4 p-5 border rounded-md w-80 text-xl">{displayText}</p>
    </div>
  )
}
