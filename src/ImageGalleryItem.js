import React, { Component } from 'react';
import './styles.css';

class ImageGalleryItem extends Component {
    
    render(hit) {
        return (
            <li key={hit.id} className="ImageGalleryItem">
              <img src="{{webformatURL}}" alt="photo" width="260" data-image="{{largeImageURL}}" className="ImageGalleryItem-image" />
            </li>
        )
    }
}

export default ImageGalleryItem;