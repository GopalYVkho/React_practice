import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const[counter,setcounter]=useState(0);
  const handclick_inc = () =>{
    setcounter (counter+1);
  }
  const handclick_dec = () =>{
    setcounter(counter-1);
  }
  return (
    <div className='counter_wraper'>
          <h1>Counter App</h1>
          <p>{counter}</p>
          <div className='wrap_btn'>
            <button onClick={handclick_inc} className='increment'>+</button>
            <button onClick={handclick_dec} className='decrement'>_</button>
          </div>
    </div>
  );
}

export default App;
