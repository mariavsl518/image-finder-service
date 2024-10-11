import React from 'react';
import css from './SearchBar.module.css';
import toast, {Toaster} from 'react-hot-toast';


export const SearchBar = ({onSearch}) => {
  return (
    <header className={css.searchBar}>
      <Toaster/>
      <form className={css.searchForm}
    
      onSubmit={(evt)=>{

        evt.preventDefault();
        const keyWord=evt.target.elements.input.value;
        if(!keyWord){
          return toast('Search form can not be empty.');
        }
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
