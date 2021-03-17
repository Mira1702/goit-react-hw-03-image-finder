import React, { useState } from 'react';

const BigHit = ({ hits, modalImg }) => {    
    const modalImgUrlArray = hits.map(hits => hits.largeImageURL);
    const index = modalImgUrlArray.indexOf(modalImg);
    const [currentIndex] = useState(index);
    const currentImgUrl = hits[currentIndex];

    console.log(modalImgUrlArray);
    console.log(index);
    console.log([currentIndex]);
    console.log(currentIndex);
    
    return (
        <img src={currentImgUrl} alt="photo" />
    )
}



export default BigHit;