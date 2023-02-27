import { useEffect, useState } from "react";

const useTimer = (initialState) => {
  const [timer, setTimer] = useState(initialState * 60);
  const [activeTimer, setActiveTimer] = useState(false);

  const restartTimer = () => {
    setTimer(initialState * 60);
  };

  const startTimerHandler = () => {
    setActiveTimer(true);
  };

  const stopTimerHandler = () => {
    setActiveTimer(false);
  };

  useEffect(() => {
    if (!activeTimer) return;

    if (timer <= 0) return;

    const id = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer, activeTimer]);

  return { timer, startTimerHandler, stopTimerHandler, restartTimer };
};

export default useTimer;
