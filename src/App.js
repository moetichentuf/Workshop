import React from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(100%);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 8s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 100px; width: 100px; opacity: 1 }
 40% { height: 205px; width: 205px; opacity: 1; }
 100% { height: 100px; width: 100px; opacity: 1; }
`
const Circle = styled.div`
 height: 10%;
 width: 10%;
 border-style: solid;
 border-width: 5px;
 border-radius: 50%;
 border-color: black;
 animation-name: ${breatheAnimation};
 animation-duration: 1s;
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
  npm install gh-pages --save-dev



  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
function App() {
  return (
    <div>
      <Rotate> 😈 </Rotate>
      <Container>
      <h1>Styled Components Test</h1>
      
      <Button>I am a Button</Button>
   <Circle />
  </Container>
      <Input></Input>
  
    </div>
  );
}
 
export default App;