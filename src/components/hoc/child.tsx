import React, { useContext, useEffect, useState } from "react";
import { HocContext, HocContextType } from "../../context/hoc-context";

const Child = () => {
  const [value, setValue] = useState("");

  const { setData, getData } = useContext<HocContextType>(HocContext);

  useEffect(() => {
    if (setData) setData(value);
    console.log(getData());
  }, [value, setData]);

  return (
    <>
      <div>Child</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default Child;
