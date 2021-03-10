import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGallery = ({ hits }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(hit => (
                <ImageGalleryItem
                    key={hit.id}
                    url={hit.webformatURL}
                    bigHit={hit.largeImageURL}
                />
            ))}
        </ul>
    )
};

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired
}

export default ImageGallery;