import React from 'react'
import css from './ImageCard.module.css'

export const ImageCard = ({id, url, alt, item, openModal}) => {
  return (
        <li className={css.imageCard}>
          <div>
            <img 
            onClick={()=>openModal(item)}
            src={url} 
            alt={alt} />
          </div>
        </li>
  )
}
