import React, { Component } from 'react';

const person = (props)=> {
  return (
    <div>
  <p onClick={props.click}>  My name {props.name} and my age is{props.age}</p>
  
    </div>
  )
};
 
  export default person;