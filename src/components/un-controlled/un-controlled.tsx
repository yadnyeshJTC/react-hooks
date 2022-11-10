import React, { useRef } from "react";

const UnControlled = () => {
  const formRef = useRef<HTMLFormElement>(null);
  function onSubmit(e: any) {
    console.log(formRef);
  }
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <h2>User</h2>
      <input type="text" name="name" id="name" />
      <input type="password" name="password" id="password" />
      <input type={"button"} value="submit" onClick={onSubmit} />
    </form>
  );
};

export default UnControlled;
