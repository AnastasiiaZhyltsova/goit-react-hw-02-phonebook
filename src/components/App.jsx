
import React, { Component } from "react";
import Form from "./Form/Form";
// import { nanoid } from "nanoid";

class App extends Component {
state = {
  contacts: [],
  filter:'',
  }
  
  formSubmitHandler = data => {
    console.log(data);
  }
  
 

  render() {
    return (
    <div>  
       <Form onSubmit = {this.formSubmitHandler} /> 
       <div>
          <h2>Contacts</h2>
          <ul></ul>
      </div>
    </div>  
    );
  }
}


export default App;