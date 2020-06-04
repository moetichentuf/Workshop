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
  animation: ${rotate} 4s linear infinite;
  padding: 2rem 1rem;
  font-size: 6rem;
`;

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 100px; width: 100px; opacity: 1 }
 40% { height: 160px; width: 160px; opacity: 1; }
 100% { height: 100px; width: 100px; opacity: 1; }
`
const Circle = styled.div`
z-index:-1;
top:25%;
position:absolute;
 height: 10%;
 width: 10%;
 border-style: solid;
 border-width: 2px;
 border-radius: 50%;
 background-color:blue;
 border-color: blue;
 animation-name: ${breatheAnimation};
 animation-duration: 1s;
 animation-iteration-count: infinite;
`
const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 300px;
`
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: blue;
  border: 2px solid blue;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: blue;
    color: white;
  }
`;
const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: blue;
  font-size: 1em;
  border: 2px solid blue;
  border-radius: 3px;



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