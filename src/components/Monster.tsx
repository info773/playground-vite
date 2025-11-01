import type { Monster as MonsterData } from "../types";

export default function Monster({ name, score, hitpoints }: MonsterData) {
  return (
    <div className="flex gap-2 my-4 p-2 border">
      <div>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={name}
          className="border rounded-md"
        />
      </div>
      <div>
        <p>Score:</p>
        <input
          type="text"
          name="Score"
          value={score}
          className="border rounded-md"
        />
      </div>
      <div>
        <p>HP:</p>
        <input
          type="text"
          name="hitpoints"
          value={hitpoints}
          className="border rounded-md"
        />
      </div>
    </div>
  );
}
