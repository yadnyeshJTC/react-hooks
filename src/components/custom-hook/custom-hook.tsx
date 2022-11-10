import React, { useEffect, useState } from "react";
import useWinner from "./use-winner";

const CustomHook = () => {
  const [name, setName] = useState("");
  const [isWinner, setWinner] = useState(false);
  const { checkPlayerWin } = useWinner();
  const check = () => {
    setWinner(checkPlayerWin(name));
  };

  useEffect(() => {
    console.log("Hey " + name);
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={check}>Check</button>
      {isWinner ? "Win" : "Loose"}
    </div>
  );
};

export default CustomHook;
