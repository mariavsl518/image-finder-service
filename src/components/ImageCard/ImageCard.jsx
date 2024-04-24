import React from 'react'
import css from './ImageCard.module.css'

export const ImageCard = ({id, url, alt, item, openModal}) => {
  return (
        <li 
        onClick={()=>openModal(item)}
        className={css.imageCard}
        key={id}>
          <div>
            <img 
            src={url} 
            alt={alt} />
          </div>
        </li>
  )
}
