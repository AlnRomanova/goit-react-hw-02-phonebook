import css from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {

  return (
    <ul className={css.contacts}>
    {contacts.map(({id, name, number}) => (
     <li className={css.contactsItem} key={id} >
       <p className={css.contactsValue}>{name}:</p>
       <p className={css.contactsValue}>{number}</p>
       <button className={css.contactsBtn} type="button" onClick={()=> onDeleteContact(id)}>Delete</button>
     </li>
   ))}
    </ul>
  )
}

export default ContactList;
