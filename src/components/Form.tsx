import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Monster } from "../types";

type FormProps = {
  onAddMonster: (monster: Monster) => void;
};

export default function Form({ onAddMonster }: FormProps) {
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name) return;

    const newMonster: Monster = {
      name,
      score: 20,
      hp: 44,
      id: Date.now(),
    };

    onAddMonster(newMonster);
    setName("");
  }

  return (
    <div className="bg-amber-500">
      <form className="flex gap-2 p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          placeholder="Monster name"
          className="border rounded-md"
        />
        <button className="border rounded-md">Add</button>
      </form>
    </div>
  );
}
