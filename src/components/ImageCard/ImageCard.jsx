import React from 'react'
import css from './ImageCard.module.css'

export const ImageCard = ({id, url, alt, openModal}) => {
  return (
        <li 
        onClick={() => openModal()}
        className={css.imageCard}
        key={id}>
          <div>
            <img 
            className={css.imageCardImg}
            src={url} 
            alt={alt} />
          </div>
        </li>
  )
}
