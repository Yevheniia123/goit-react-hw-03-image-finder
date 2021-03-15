import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ fetchPictures }) => (
  <div className={s.loadMore}>
    <button className={s.Button} type="button" onClick={fetchPictures}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  fetchPictures: PropTypes.func.isRequired,
};
export default Button;
