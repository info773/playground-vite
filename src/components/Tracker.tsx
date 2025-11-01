import type { Monster as MonsterType } from "../types";
import Monster from "./Monster";

type TrackerProps = {
  monsterList: MonsterType[];
};

export default function Tracker({ monsterList }: TrackerProps) {
  return (
    <div className="bg-amber-200 p-4 min-h-screen">
      <p className="mb-2 font-semibold text-lg">Tracker</p>
      <div className="space-y-2">
        {monsterList.map((monster) => (
          <Monster key={monster.id} {...monster} />
        ))}
      </div>
    </div>
  );
}
