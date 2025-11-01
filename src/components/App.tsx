import { useState } from "react";
import type { Monster } from "../types";

import Header from "./Header";
import Form from "./Form";
import Tracker from "./Tracker";

export default function App() {
  const [monsterList, setMonsterList] = useState<Monster[]>([]);

  function handleAddMonster(monster: Monster) {
    setMonsterList((monsters) => [...monsters, monster]);
  }

  return (
    <div>
      <Header />
      <Form onAddMonster={handleAddMonster} />
      <Tracker monsterList={monsterList} />
    </div>
  );
}
