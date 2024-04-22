import './FilterCheckbox.css';

export default function FilterCheckbox({ toggleFilter }) {

  return (
    <label className="filter-checkbox">
      <div className="filter-checkbox__container">
        <form className="filter-checkbox__button-container">
          <input 
            className="filter-checkbox__button-input" 
            type="checkbox" 
            id="check" 
            onChange={toggleFilter} 
          />
          <label className="filter-checkbox__button" htmlFor="check"></label>
        </form>
        <span className="filter-checkbox__text">Короткометражки</span>
      </div>
    </label>
  );
}