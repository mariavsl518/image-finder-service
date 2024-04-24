import { useState, useEffect} from 'react'
import { fetchImages } from './api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn';
import {ImageModal} from './components/ImageModal/ImageModal';
import { Loader } from './components/Loader/Loader';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [page, setPage] = useState(1);
  const [query , setQuery] = useState('');
  
  const [imageCard, setImageCard] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [showBtn, setShowBtn] = useState(false);


  const handleSearch = (keyWord) => {
    setQuery(keyWord);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  function openModal(item) {
    setImageCard(item);
    setModalIsOpen(true)
  }

  useEffect(() => {
    if(!query){
      return;
    }

    async function getImages(){
      try {
      setError(false)
      setIsLoading(true)
      const fetchData = await fetchImages(query, page);
      const totalPages = fetchData.total_pages;
      setImages((prevImg)=>{
        return[...prevImg, ...fetchData.results];
      });
      setShowBtn(totalPages && totalPages !== page)
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
   {!modalIsOpen && <SearchBar onSearch={handleSearch}/>}
    {!error ? 
    <ImageGallery collection={images}
    openModal={openModal}
    /> 
    : <ErrorMessage/>}
    
    {showBtn && 
    !isLoading && 
    (<LoadMoreBtn loadMore={handleLoadMore}/>)}

    {isLoading && <Loader/>}

    {modalIsOpen && <ImageModal 
    modalIsOpen={modalIsOpen}
    setModalIsOpen={setModalIsOpen}
    imageCard={imageCard}
    />}
    </>
  )
}
