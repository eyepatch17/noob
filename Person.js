import React, { Component } from 'react';

const person = (props)=> {
  return (
    <div>
  <p onClick={props.click}>  My name {props.name} and my age is{props.age}</p>
  <input type="text" value={props.name} onChange={props.changed} />
<input type="number" value={props.age} onChange={props.idchanged}/>   
  
    </div>
  )
};
 
  export default person;
