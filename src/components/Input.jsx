import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const Input = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <Container>
      <h2>Input</h2>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <StyledInput
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={onValide.email}
        />
        <button onClick={onValide.email}>add</button>
        {email.error && <Error>{email.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={onValide.password}
        />
        <button onClick={onValide.password}>add</button>
        {email.error && <Error>{password.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="date">Date</label>
        <StyledInput
          type="date"
          id="date"
          value={date.value}
          onChange={date.onChange}
          onBlur={onValide.date}
        />
        <button onClick={onValide.date}>add</button>
        {email.error && <Error>{date.error}</Error>}
      </InputContainer>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: grid;
  gap: 15px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 450px 100px 450px;
  justify-content: center;
  gap: 1rem;
 
`;

const Error = styled.p`
  color: red;
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
`;
