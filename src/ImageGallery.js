import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './styles.css';

class ImageGallery extends Component {
    state = {
        hits: []
    }
    render(hits) {
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
    }
}

export default ImageGallery;