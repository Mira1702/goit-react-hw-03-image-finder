import React from 'react';
import './styles.css';

// class ImageGalleryItem extends Component {
    
//     render() {
//         return (
//             <li className="ImageGalleryItem">
//               <img src="{{webformatURL}}" alt="photo" width="260" data-image="{{largeImageURL}}" className="ImageGalleryItem-image" />
//             </li>
//         )
//     }
// }

const ImageGalleryItem = ({url, bigHit}) => {
    <li className="ImageGalleryItem">
        <img src={url} alt="photo" width="260" data-image={bigHit} className="ImageGalleryItem-image" />
    </li>
}

export default ImageGalleryItem;