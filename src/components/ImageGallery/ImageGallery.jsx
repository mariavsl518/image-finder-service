import React from 'react'
import {ImageCard} from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export const ImageGallery = ({collection, openModal}) => {
  return (
    <ul className={css.imageList}>
      {
      collection.map((item) =>(
          <ImageCard
          item={item}
          openModal={openModal}
          key={collection.indexOf(item)} 
          url={item.urls.small} 
          alt={item.alt_description}
          />
        )
      )
      }
    </ul>
  )
}
