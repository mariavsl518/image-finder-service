import React from 'react';
import ReactModal from 'react-modal';
// import css from './ImageModal.module.css'

export const ImageModal = ({collection, closeModal}) => {

  // console.log(collection);

  return (

    <div>
      <ReactModal
        // isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}

      >
        <h2>Modal Title</h2>
        <img src={collection.urls.full} alt="" />
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </ReactModal>
    </div>

  )
}
