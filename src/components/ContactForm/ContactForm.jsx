import React, {Component} from 'react';

class ContactForm extends Component {

  state = {
    contacts: [],
    name: ''
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handlerSubmit = (e) => {
    e.preventDefault()
     this.props.addContact(this.state)

     this.setState = {
      contacts: [],
      name: '',
    }
  }


  render() {
    const {name} = this.state;
  return (
    <form onSubmit={this.handlerSubmit}>
      <h1>Phonebook</h1>
      <input
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleNameChange}
/>
<button>Add contacts</button>
    </form>
  )

}
};

export default ContactForm;
