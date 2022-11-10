import React, { useContext } from "react";
import { HocContext, HocContextType } from "../../context/hoc-context";

declare type MainProps = {
  child: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ child }) => {
  const { getData } = useContext<HocContextType>(HocContext);

  return (
    <>
      <div>Main - {getData()}</div>
      {child}
    </>
  );
};

export default Main;
