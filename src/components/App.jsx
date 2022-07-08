
import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from "nanoid";

import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
state = {
  contacts: [],
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],
  filter:'',
  }
  
  formSubmitHandler = ({name, number}) => {
    console.log({name, number});
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }))
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
    const { filter } = this.state;
    const contactsFilter = this.getContactsFilter();
    return (
      <div> 
         <h1>Phonebook</h1>  
            <Form onSubmit={this.formSubmitHandler} /> 

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