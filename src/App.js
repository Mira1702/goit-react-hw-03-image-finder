import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import SpinnerLoader from './SpinnerLoader';
import Modal from './Modal';
import './styles.css';


// axios.defaults.headers.common['Authorization'] = 'Bearer 19787930-3152e5d62708cea03366e4b32';


class App extends Component {
  state = {
    hits: [],
    page: 1,
    query: '',
    isLoading: false,
    showModal: false,
    modalImg: ''
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchHits();
      this.scrollTo();
    }
  }

  onChangeSearchQuery = searchQuery => {
    this.setState({ query: searchQuery, page: 1, hits: [] })      
  }

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchHits = () => {
    const key = '19787930-3152e5d62708cea03366e4b32';
    const { page, query } = this.state;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    
    this.setState({isLoading: true})
    
    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  modalOpen = () => {    
    this.setState(({ showModal }) => ({
      showModal: !showModal      
    }));
  };

  hitOpen = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({ modalImg: event.target });
    this.modalOpen();
  };

    

  render() {
    const { hits, modalImg, isLoading, showModal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeSearchQuery} />
        {isLoading && <SpinnerLoader />}
        {hits.length > 0 && (<ImageGallery hits={hits} onClick={this.hitOpen}/>)}
        {hits.length > 0 && <Button onClick={this.fetchHits} />}        
        {showModal && (
          <Modal modalImg={modalImg} onClose={this.modalOpen}>
            <img src={modalImg.dataset.image} />             
          </Modal>
        )}
      </div>
    )    
  }
}

export default App;
