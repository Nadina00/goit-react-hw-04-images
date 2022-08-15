import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
const[ imageName, setImageName] = useState('')


  const handleSearchSubmit = imageName =>{
  setImageName(imageName)
   }
  
  return (
    <div className={styles.app}>
    <Searchbar onSubmit={handleSearchSubmit}/>
    <ImageGallery imageName={imageName}/>
     </div>
  );
};

App.propTypes = {
  imageName: PropTypes.string}
