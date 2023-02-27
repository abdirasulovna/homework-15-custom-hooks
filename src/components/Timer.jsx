import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import useTimer from "./hooks/useTimer";

const Timer = () => {
  const { value, onChange } = useInput(2);

  const { timer, startTimerHandler, stopTimerHandler, restartTimer } =
    useTimer(value);

  return (
    <Container>
<h2>Timer</h2>
      <h1>{timer}</h1>
      <Input type="number" min={1} value={value} onChange={onChange} />
      <ButtonContainer>
        <Button onClick={startTimerHandler}>Start</Button>
        <Button onClick={stopTimerHandler}>Stop</Button>
        <Button onClick={restartTimer}>Restart</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #098f47;
  padding: 1rem 2rem;
  color: white;
`;
const Input = styled.input`
 background-color: aliceblue;
  padding: 1rem 2rem;
  border: none;
`;
