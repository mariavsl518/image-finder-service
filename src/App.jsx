import { useState, useEffect} from 'react'
import { fetchImages } from './api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn';
import {ImageModal} from './components/ImageModal/ImageModal';
import { Loader } from './components/Loader/Loader';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import ReactModal from 'react-modal';

import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query , setQuery] = useState('');

  const [imageCard, setImageCard] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleSearch = (keyWord) => {
    setQuery(keyWord);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }


  useEffect(() => {
    if(query === ''){
      return;
    }

    async function getImages(){
      try {
      setError(false)
      setIsLoading(true)
      const fetchData = await fetchImages(query, page)
      setImages((prevImg)=>{
        return[...prevImg, ...fetchData.results];
      });
      } catch (error) {
        setError(true)
      }
      finally{
        setIsLoading(false)
      }
    }
    getImages()
  }, [page, query]);

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
    {!error ? 
    <ImageGallery collection={images}
    openModal={openModal}
    /> 
    : <ErrorMessage/>}
    
    {images.length>0 && !isLoading &&(
    <LoadMoreBtn loadMore={handleLoadMore}/>)}

    {isLoading && <Loader/>}

    {
    modalIsOpen && 
    <ImageModal collection={images} 
    closeModal={closeModal}
    />}
    </>
  )
}

ReactModal.setAppElement(<ImageModal/>);

