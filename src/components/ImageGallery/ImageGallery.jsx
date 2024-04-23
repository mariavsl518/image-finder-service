import React from 'react';
import {ImageCard} from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export const ImageGallery = ({collection, openModal}) => {
  return (
    <ul className={css.imageList}>
      {
      collection.map((item) =>(
          <ImageCard 
          openModal={openModal}
          key={item.id} 
          url={item.urls.small} 
          alt={item.alt_description}
          />
        )
      )
      }
    </ul>
  )
}
