import { useState } from "react";

const useCounter = (incrementState, decrementState) => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState) => prevState + incrementState);
  };

  const decrementHandler = () => {
    if (count > 0) {
      setCount((prevState) => prevState - decrementState);
    }
  };

  const resetHandler = () => {
    setCount(0);
  };

  return {
    count,
    incrementHandler,
    decrementHandler,
    resetHandler,
  };
};

export default useCounter;
