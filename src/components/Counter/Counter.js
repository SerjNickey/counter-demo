import React from 'react';
import './Counter.sass';


const Counter = ({ counter, onAdd, onSub, onAddAsync, onSubAsync }) => {
  return (
    <div className="container counterWrapper text-center">
      <div className="counter">Counter: {counter}</div>

      <div className="counterButtons">
        <button onClick={onAdd}>Add 1</button>
        <button onClick={onSub}>Sub 1</button>     
        <button onClick={onAddAsync}>(Async) Add 20</button>   
        <button onClick={onSubAsync}>(Async) Sub 20</button>
      </div>      
    </div>
  );
}


export default Counter;