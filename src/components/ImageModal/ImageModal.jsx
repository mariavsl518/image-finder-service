// import React from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css'

export const ImageModal = ({imageCard, modalIsOpen, setModalIsOpen}) => {

  return (

    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsOpen(false)}
        style={{
          overlay:{
            backgroundColor: 'rgba(41, 41, 41, 0.5)'
          },
          content:{
            backgroundColor: 'rgb(41, 41, 41)',
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
            border: 'none',
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            height: 'fit-content',
            width: 'fit-content',
            padding:'30px 30px 0 30px',
          },
        }}
      >
        <button onClick={() => setModalIsOpen(false)}
          className={css.closeBtn}>Close</button>
          <div className={css.imgDiv}>
        <img src={imageCard.urls.regular} alt={imageCard.alt_description} 
        className={css.image}/>
          <div className={css.descriptionBox}>
          <p>Author: {imageCard.user.name}</p>
          <p>Likes: {imageCard.likes}</p>
          <a className={css.link} target='blank' href={imageCard.links.download}>Click to download</a>
          </div>
          </div>
        
      </ReactModal>
    </div>

  )
}
