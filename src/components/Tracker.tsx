import Monster from "./Monster";
import type { Monster as MonsterData } from "../types";

export default function Tracker({
  monsterList,
}: {
  monsterList: MonsterData[];
}) {
  return (
    <div className="flex-col bg-violet-200 p-4 h-screen">
      {monsterList.map((monster: MonsterData) => (
        <Monster
          name={monster.name}
          score={monster.score}
          hitpoints={monster.hitpoints}
          id={monster.id}
          key={monster.id}
        />
      ))}
    </div>
  );
}
