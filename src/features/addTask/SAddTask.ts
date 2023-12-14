import styled from "styled-components";

export const SAddTask = styled.div`
  width: 100%;
  padding: 12px;

  input {
    padding: 12px;
    outline: none;
  }

  select {
    padding: 12px;
    outline: none;
  }

  button {
    padding: 12px;
    outline: none;
    background-color: purple;
    border: none;
    border: solid 1px purple;
    color: white;
    cursor: pointer;
    margin: 12px;
  }

  button:disabled,
  button[disabled] {
    background-color: grey;
    border: solid 1px grey;
    cursor: default;
  }
`;
