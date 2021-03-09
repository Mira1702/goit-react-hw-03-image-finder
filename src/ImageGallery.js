import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './styles.css';

// class ImageGallery extends Component {
    
//     render(hits) {
//         return (
//             <ul className="ImageGallery">
//                 {hits.map(({id, webformatURL, largeImageURL}) => (
//                     <ImageGalleryItem
//                         key={id}
//                         url={webformatURL}
//                         bigHit={largeImageURL}
//                     />
//                 ))}
//             </ul>
//         )
//     }
// }

const ImageGallery = ({ hits }) => {
    <ul className="ImageGallery">
        {hits.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                url={webformatURL}
                bigHit={largeImageURL}
            />
        ))}
    </ul>
}

export default ImageGallery;