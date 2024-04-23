import React from 'react';
import css from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ({loadMore}) => {
  return (
    <button 
    className={css.loadMore}
    type='button' onClick={loadMore}>Load more</button>
  )
}
