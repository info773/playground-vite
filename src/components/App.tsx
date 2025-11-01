import Header from "./Header";
import Form from "./Form";
import Tracker from "./Tracker";
import type { Monster } from "../types";
import { useState } from "react";

export default function App() {
  const [monsterList, setMonsterList] = useState<Monster[]>([]);
  const sortedMonsterList: Monster[] = monsterList.sort(
    (a, b) => b.score - a.score
  );

  function handleAddMonsters(newMonster: Monster) {
    setMonsterList((monsters) => [...monsters, newMonster]);
  }

  return (
    <div>
      <Header />
      <Form onAddMonsters={handleAddMonsters} />
      <Tracker monsterList={sortedMonsterList} />
    </div>
  );
}
