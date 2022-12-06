import React, {Component} from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {

  state = {
    contacts: [],
    name: ''
  };

  loginInputId = nanoid();

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handlerSubmit = (e) => {

    e.preventDefault()
     this.props.onSubmit(this.state)
     this.reset();
  }

  reset = () => {
    this.setState = {
      contacts: [],
      name: '',
    }
  }


  render() {
    const {name, loginInputId} = this.state;
  return (
    <form onSubmit={this.handlerSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor=""> Name
      <input
  type="text"
  name="name"
  value={name}
  id = {loginInputId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleNameChange}
/>
</label>
<button>Add contacts</button>
    </form>
  )

}
};

export default ContactForm;
