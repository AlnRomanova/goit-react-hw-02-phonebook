import React, {Component} from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  };


  handleNameChange = ({target: {name, value}})=> {
   console.log(name)
   this.setState({
    [name]: value,
 })



}

  handlerSubmit = (e) => {

    e.preventDefault()

     this.props.addContact({...this.state})

     this.setState({
      name: '',
      number: ''
    })


  }

  render() {
    const {name, id, number} = this.state;
  return (
    <form onSubmit={this.handlerSubmit}>
      <label htmlFor=""> Name
      <input
  type="text"
  name="name"
  value={name}
  id = {id}
  onChange={this.handleNameChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required

/>
</label>
<label htmlFor=""> Number
<input
  type="tel"
  name="number"
  value={number}
  id = {id}
  onChange={this.handleNameChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required

/>
</label>
<button>Add contacts</button>
    </form>
  )

}
};

export default ContactForm;
