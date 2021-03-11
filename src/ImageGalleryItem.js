import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGalleryItem = ({ url, bigHit, onClick }) => {
    return (
        <li className="ImageGalleryItem">
            <img
                src={url}
                alt="photo"
                width="260"
                data-image={bigHit}
                className="ImageGalleryItem-image"
                onClick={onClick}
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string,
    bigHit: PropTypes.string,
};

export default ImageGalleryItem;