import React from 'react';
import styled from 'styled-components';
import './App.css';
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
function App() {
  return (
    <div>
      <Input></Input>
      <h1>Styled Components Test</h1>
      
      <Button>I am a Button</Button>
    </div>
  );
}
 
export default App;