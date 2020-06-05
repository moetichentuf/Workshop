import React from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';
import heart from './heart.png';



// Create the keyframes
const move = keyframes`
  from {
    transform: scale(2);
  }
  to {
    transform: scale(2.2);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Move = styled.div`
  display: inline-block;
  animation: ${move} 1s ease-out infinite;
  padding: 2rem 1rem;
  size:1%;
  margin-top:20%;
`;


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
  font-size: 5vh;
  border-radius: 3px;
  color: black;
  border: 2px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: red;
    color: black;
  }
`;

function App() {
  return (
    <div>
      <Move><img style={{width:'15%'}}  src={heart} alt={heart} /> </Move>
      <Container>
    
      <Button >Start Heart</Button>
 
  </Container>
      
  
    </div>
  );
}
 
export default App;