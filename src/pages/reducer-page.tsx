import React from "react";
import CustomHook from "../components/custom-hook/custom-hook";
import Reducer from "../components/reducer/reducer";
import UseCallbackHook from "../components/use-callback-hook/use-callback-hook";
import UseMemoHook from "../components/use-memo-hook/use-memo-hook";

const ReducerPage = () => {
  return (
    <>
      {/* <h1>Hook</h1>
      <h2>ReducerPage</h2>
      <Reducer /> */}
      {/* <br />
      <br />
      <h2>Use memo</h2>
      <UseMemoHook />
      <br />
      <br /> */}
      {/* <h2>Use Callback</h2>
      <UseCallbackHook /> */}

      <br />
      <br />
      <h2>Use Custom hook</h2>
      <CustomHook />
    </>
  );
};

export default ReducerPage;
