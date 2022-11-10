import React, { useEffect, useRef, useState } from "react";

const UnControlled = () => {
  const [isPending, setIsPending] = useState(false);

  const changePending = () => {
    setIsPending(true);
  };

  useEffect(() => {
    changePending();
  }, []);

  if (isPending) {
    return <div>Hello World</div>;
  } else {
    return <div>Hello Tony</div>;
  }
};

export default UnControlled;
