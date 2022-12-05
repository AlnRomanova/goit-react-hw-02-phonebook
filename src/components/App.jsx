import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';


export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  addContact = data => {
    console.log(data)
    const newContact = {
      ...data,
      id: nanoid(),
  }

  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact]}))

}


  render() {

    return (
      <>

      <ContactForm  handleNameChange = {this.handleNameChange} addUser={this.addUser} />

      <h2>Contacts</h2>
      {/* <Filter />
      <ContactList />  */}
    </>
  );
  }


};

