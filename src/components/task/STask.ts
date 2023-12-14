import styled from "styled-components";


interface TSTask {
  isDone: boolean;
}

export const STask = styled.div<TSTask>`
  padding: 12px;
  margin: 12px;
  border: solid 1px black;
  background-color: ${props => (props.isDone ? "#6b6b6b" : "#fff")};
  color: ${props => (props.isDone ? "black" : "black")};
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 8px;
    margin: 4px;
    border: solid 1px black;
    cursor: pointer;
  }

  button:hover {
    background-color: purple;
    color: white;
    border: solid 1px black;
  }
`;
