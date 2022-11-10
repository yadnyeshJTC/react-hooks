import React from "react";
import Child from "../components/hoc/child";
import Main from "../components/hoc/main";
import { HocContextProvider } from "../context/hoc-context";

const HocPage = () => {
  return (
    <HocContextProvider value="initial" name="name">
      <div>HocPage</div>
      <Main child={<Child />} />
    </HocContextProvider>
  );
};

export default HocPage;
