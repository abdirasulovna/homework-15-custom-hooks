import React from "react";
import styled from "styled-components";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  const { count, incrementHandler, decrementHandler, resetHandler } =
    useCounter(4, 2,0);

  return (
    <Container>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <Button  onClick={incrementHandler}>
        increment
      </Button>
      <Button   onClick={decrementHandler}>
        decrement
      </Button>
      <Button   onClick={resetHandler}>
        reset
      </Button>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #098f47;
  padding: 1rem 2rem;
`