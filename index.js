import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Person from './Person';

class App extends Component {
  
    state = {
      person:[{id:1,name:"Vivek",age:19},
              {id:2,name:"Ramesh",age:20},
              {id:3,name:"Rajesh",age:21}
              ],
      status:false
    };
  
  troggleHandler=()=>
  {
    const newStatus=this.state.status;
    this.setState({status:!newStatus});
  }
  deleteHandler=(index)=>
  {
    const newperson=[...this.state.person];
    newperson.splice(index,1);
    this.setState({person:newperson});
  }
  changeHandler=(event,id)=>{

const personIndex=this.state.person.findIndex(p=>
{return p.id==id});

const person={...this.state.person[personIndex]};
person.name=event.target.value;
const persons=[...this.state.person]
persons[personIndex]=person;
console.log("value of"+persons);

this.setState({person:persons});

  }
  idchangeHandler=(event,id)=>
  {
    const personIndex=this.state.person.findIndex(p=>{return p.id==id});
    const person={...this.state.person[personIndex]};
    person.age=event.target.value;
    const persons=[... this.state.person];
    persons[personIndex]=person;
    this.setState({person:persons});
  }

  render() {
let persons=null;
if(this.state.status)
{
persons=(
  <div>
  {this.state.person.map((person,index)=>
  {
return <Person 
name={person.name} 
age={person.age} 
key={person.id} 
click={this.deleteHandler.bind(this,index)} 
changed={(event)=>this.changeHandler(event,person.id)} 
idchanged={(event)=>this.idchangeHandler(event,person.id)}
 />
  
  })}

  </div>

)
}

  
    return (
      <div>
       {persons}
       <button onClick={this.troggleHandler}  >Click To Troggle</button>
      
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;
