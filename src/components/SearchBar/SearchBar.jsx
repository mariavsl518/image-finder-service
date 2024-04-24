import React from 'react';
import css from './SearchBar.module.css'

export const SearchBar = ({onSearch}) => {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm}
    
      onSubmit={(evt)=>{

        evt.preventDefault();
        const keyWord=evt.target.elements.input.value
        onSearch(keyWord);

      }}>

        <input
          className={css.searchInput}
          name='input'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button 
        className={css.searchBtn}
        type="submit">Search</button>
        
      </form>
    </header>
  )
}
