import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
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
const {contacts} = this.state
    return (
      <>

      <ContactForm  handleNameChange = {this.handleNameChange} onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ul>
       {contacts.map(contact => (
        <li key={contact.id} >
          <p

          > {contact.name}</p>
        </li>
      ))}
       </ul>

      {/* <Filter />
      <ContactList />  */}
    </>
  );
  }


};

