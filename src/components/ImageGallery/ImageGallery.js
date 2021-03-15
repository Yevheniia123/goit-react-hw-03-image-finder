import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick }) => (
  <ul className={s.ImageGallery} onClick={onClick}>
    {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        webformatURL={webformatURL}
        tags={tags}
        key={id}
        ariaModal={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default ImageGallery;
