import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import { Loader } from 'components/Loader/Loader';
import {fetchImage} from './Fetch'
import {Button} from 'components/Button/Button'



export const ImageGallery =({imageName}) =>  {
    const [images, setImage] = useState([])
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('')
    const [page, setPage] = useState(1)
    
    
   useEffect(() =>{
   if(!imageName){
    return
   }
    setStatus('pending')
    setPage(1)
    setImage([])
    fetchImage(imageName)
    .then(images => {
        setImage(images);
        setStatus('resolved')})
    .catch(error => setStatus('rejected'))
   }, [imageName]) 
    

   useEffect(() =>{
    if(!imageName){
        return
       }
    setStatus('pending')
    fetchImage(imageName, page)
    .then(images => {
        setImage(prevImage => [...prevImage,...images]);
        setStatus('resolved')
    })
    .catch(error =>{
    setError(error);
    setStatus('rejected')})
   }, [imageName,page]) 
         
    const loreMore = () => {
    setPage(prevPage => (prevPage + 1)
    )
}
       
    if(status === 'pending'){
        return <Loader loader={Loader}/>
    }
    if(status === 'rejected'){
    <h2>{error.messange}</h2>
    }
    if(status === 'resolved'){
        return (<div> 
        <ul className={styles.gallery}>
        {images.map(image => (
    <ImageGalleryItem image={image} key={image.id}/>
        ))}  
    </ul>
    
    <Button onClick={loreMore}>Load more</Button>
    </div> )
        }
}
ImageGallery.propTypes = {
images: PropTypes.array,
error: PropTypes.string,
status: PropTypes.string,
page:  PropTypes.number}