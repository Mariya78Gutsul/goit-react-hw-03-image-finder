import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

// const ImageGallery = ({ images, openModal }) => {
//   return (
//     <ul className={styles.ImageGallery}>
//       {images.map(image => (
//         <ImageGalleryItem openModal={openModal} key={image.id} image={image} />
//       ))}
//     </ul>
//   );
// };
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ tags, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          openModal={() => openModal(largeImageURL)}
          key={largeImageURL}
          image={webformatURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
