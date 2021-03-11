import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

export default class LightboxExample extends Component {
  constructor(hits) {
    super(hits);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={hits[photoIndex]}
            nextSrc={hits[(photoIndex + 1) % hits.length]}
            prevSrc={hits[(photoIndex + hits.length - 1) % hits.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + hits.length - 1) % hits.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % hits.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
