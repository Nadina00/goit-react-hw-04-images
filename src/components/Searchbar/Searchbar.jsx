import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

export const Searchbar= ({onSubmit}) =>  {
  const [imageName, setImageName] = useState('')  
 

const handleSubmit= evt =>{
  evt.preventDefault()
   if(imageName.trim() === ""){
   alert ("not name")
   return
   }
   onSubmit(imageName)
     }

  const handleChange = evt => {
  setImageName(evt.currentTarget.value.toLowerCase())
     }
     
        return(
  <header className={styles.searchbar}>
  <form className={styles.form} onSubmit={handleSubmit}>
  <button type="submit" className={styles.searchFormButton}>
    <span className={styles.searchFormButtonLabel}>Search</span>
  </button>

    <input
      className={styles.searchFormInput}
      type="text"
       placeholder="Search images and photos"
      value={imageName}
      onChange={handleChange}
    />
  </form>
</header>
        )
     }
    
Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func}