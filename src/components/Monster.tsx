import type { Monster as MonsterType } from "../types";

export default function Monster({ name, score, hp }: MonsterType) {
  return (
    <div>
      <span>
        {name} / {score} / {hp}
      </span>
    </div>
  );
}
