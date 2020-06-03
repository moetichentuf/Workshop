import React from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';
const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`
const Circle = styled.div`
 height: 100px;
 width: 100px;
 border-style: solid;
 border-width: 5px;
 border-radius: 50%;
 border-color: black;
 animation-name: ${breatheAnimation};
 animation-duration: 8s;
 animation-iteration-count: infinite;
`
const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 450px;
`
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
      <Container>
   <Circle />
  </Container>
      <Input></Input>
      <h1>Styled Components Test</h1>
      
      <Button>I am a Button</Button>
    </div>
  );
}
 
export default App;