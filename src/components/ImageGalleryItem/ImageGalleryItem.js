import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, ariaModal }) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={s.ImageGalleryItemImage}
      aria-modal={ariaModal}
    />
  </li>
);

ImageGalleryItem.defaultProps = {
  tags: 'image',
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  ariaModal: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
export default ImageGalleryItem;
