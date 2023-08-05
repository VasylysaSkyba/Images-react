import { useState } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      toast.error('Enter your search query');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchForm__button}>
          <span className={styles.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={styles.SearchForm__input}
          onChange={handleChange}
          name="search"
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
