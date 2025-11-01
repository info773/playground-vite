import { useState, type FormEvent } from "react";
import type { Monster as MonsterData } from "../types";

export default function Form({
  onAddMonsters,
}: {
  onAddMonsters: (monster: MonsterData) => void;
}) {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [hitpoints, setHitpoints] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name) return;

    const newMonster: MonsterData = {
      name,
      score,
      hitpoints: 20,
      id: Date.now(),
    };

    onAddMonsters(newMonster);

    setName("");
    setScore(0);
    setHitpoints(0);
  }

  return (
    <div className="bg-violet-400 px-2 py-6">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Monster name"
            className="border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Score:</p>
          <input
            type="text"
            name="score"
            className="border rounded-md"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        <div>
          <p>HP:</p>
          <input
            type="text"
            name="hitpoints"
            className="border rounded-md"
            value={hitpoints}
            onChange={(e) => setHitpoints(Number(e.target.value))}
          />
        </div>
        <button className="p-2 border rounded-md">Add</button>
      </form>
    </div>
  );
}
