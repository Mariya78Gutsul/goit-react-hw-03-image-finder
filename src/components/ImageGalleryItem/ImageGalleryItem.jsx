import React from 'react';
import T from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal, tags }) => {
  return (
    <li onClick={openModal} className={styles.ImageGalleryItem}>
      <img src={image} alt={tags} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: T.string,
  openModal: T.func,
  tags: T.string,
};

export default ImageGalleryItem;
