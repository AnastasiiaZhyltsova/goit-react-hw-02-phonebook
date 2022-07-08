
import React, { Component } from "react";
import { nanoid } from "nanoid";

import Form from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";

class App extends Component {
state = {
  contacts: [],
  filter:'',
  }
  
  formSubmitHandler = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
  
    const { contacts } = this.state;
    const normalzeName = name.toLocaleLowerCase();
   // eslint-disable-next-line
    {contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)   
       ? alert(`${contact.name} is already in contacts`)
       : this.setState(({contacts}) => ({contacts: [contact, ...contacts]}))
  }  
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }
   
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value
    })
  };
  
  getContactsFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }
 

  render() {
    const { contacts, filter } = this.state;
    const contactsFilter = this.getContactsFilter();
    return (
      <div> 
         <h1>Phonebook</h1>  
        <Form
          onSubmit={this.formSubmitHandler}
          contacts = {contacts}
        /> 

        <h2>Contacts</h2>  
        <Filter
          value={filter}
          onChange={this.changeFilter}         
        />
        <ContactList
          contacts={contactsFilter}
          onDeleteContact={this.deleteContact}
        />         
      </div>  
    );
  }
}

export default App;