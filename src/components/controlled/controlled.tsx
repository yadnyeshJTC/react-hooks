import React, { useState } from "react";

const Controlled = () => {
  const [state, setState] = useState({ name: "" });
  const handleSubmit = () => {
    console.log(state);
  };
  const handleNameChange = (v: any) => {
    setState((p) => ({ ...p, name: v.target.value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>User</h2>
      <input value={state.name} onChange={handleNameChange} />
      <input type={"submit"} value="submit" />
    </form>
  );
};

export default Controlled;
