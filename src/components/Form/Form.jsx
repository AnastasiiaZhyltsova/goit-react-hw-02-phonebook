import React, { Component } from "react";

class Form extends Component{
  state = {
   name: '',
   number: '',
  }

    handleChange = evt => {
      this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
     
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
     this.reset();
    // console.log(this.state);
  }
   reset = () => {
    this.setState({ name: '', number: ''})
  }
  render() {
    const { name, number } = this.state;

    return (
       <form onSubmit={this.handleSubmit}> 
        <label>
          <span>
              Name
          </span>
          <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange= {this.handleChange}
          />
        </label>
        <label>
          <span>
              Number
          </span>
          <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange= {this.handleChange}
            />
        </label>
        <button type="submit"> Add contact</button>
      </form>  
    )
  }
};

export default Form;