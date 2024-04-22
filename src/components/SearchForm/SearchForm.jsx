import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({ toggleFilter  }) {


  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="search-form">
          <div className="search-form__input-container"> 
            <input 
              className="search-form__input"
              type="text" 
              placeholder='Фильм' 
              required 
            />
          </div>
          <button className="search-form__button"></button>
        </form>
        <FilterCheckbox toggleFilter={toggleFilter}/>
      </div>
    </section>
  );
}