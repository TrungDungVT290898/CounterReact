import React,{useState} from 'react';
import "./App.css";
function App() {
  const [count,setCount]=useState(0);
  const color=count>0?"green":count<0?"red":"black";
  const handleClick=(element)=>{
    let id=element.target.id;
    console.log(`${id} button has been clicked!`);
    if(id==="decrease"){
      setCount(count-1);
    }
    else if(id==="reset"){
      setCount(0);
    }
    else {
      setCount(count+1);
    }
  };
  return (
    <div className='container'>
      <h1>Counter</h1>
      <span style={{color}} id="value">{count}</span>
      <div className='btn-group'>
        <button id="decrease" onClick={handleClick} className='btn btn-decrease'>DECREASE</button>
        <button id="reset" onClick={handleClick} className='btn btn-reset'>RESET</button>
        <button id="increase" onClick={handleClick} className='btn btn-increase'>INCREASE</button>
        
      </div>
    </div>
    
    );
}

export default App;