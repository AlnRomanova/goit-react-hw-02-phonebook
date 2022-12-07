import css from './Filter.module.css';

const Filter = ({value, onChange}) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input className={css.filterInput} type="text" value={value} onChange={onChange}/>
    </label>

  )
}

export default Filter;
