import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../SearchBar/SearchBar.module.scss';

const Searchbar = ({ onSubmit, searchQuery }) => {
  const [searchName, setSearchName] = useState('');

  const handleInputChange = e => {
    setSearchName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={s.header}>
      <form
        className={s.form}
        onSubmit={handleSubmit}
        defaultValue={searchQuery}
      >
        <button className={s.btn} type="submit">
          <img
            className={s.icon}
            src={
              'https://raw.githubusercontent.com/EllaHonchar/goit-js-hw-11/8189ae51e5a4a5f5eb4ef508d0798cb2738b5f87/src/search.svg'
            }
            alt="search"
          />
        </button>

        <input
          className={s.input}
          value={searchName}
          onChange={handleInputChange}
          type="text"
          placeholder="Search movie..."
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};
