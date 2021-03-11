import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGallery = ({ hits, onClick }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(hit => (
                <ImageGalleryItem
                    key={hit.id}
                    url={hit.webformatURL}
                    bigHit={hit.largeImageURL}
                    onClick={onClick}
                />
            ))}
        </ul>
    )
};

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired
}

export default ImageGallery;