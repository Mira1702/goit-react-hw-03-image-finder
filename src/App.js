import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import SpinnerLoader from './SpinnerLoader';
import Modal from './Modal';
import BigHit from './BigHit';
import './styles.css';


// axios.defaults.headers.common['Authorization'] = 'Bearer 19787930-3152e5d62708cea03366e4b32';


class App extends Component {
  state = {
    hits: [],
    page: 1,
    query: '',
    isLoading: false,
    showModal: false,
    modalImgUrl: ''
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

  modalOpen = (url = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImgUrl: url,
    }));
  };


  render() {
    const { hits, modalImgUrl, isLoading, showModal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeSearchQuery} />
        {isLoading && <SpinnerLoader />}
        {hits.length > 0 && (<ImageGallery hits={hits} onClick={this.modalOpen}/>)}
        {hits.length > 0 && <Button onClick={this.fetchHits} />}        
        {showModal && (
          <Modal onClick={this.modalOpen} onClose={this.modalOpen}>          
            <BigHit modalImgUrl={modalImgUrl} hits={hits} />
            <h1>HELLO</h1>
          </Modal>
        )}
      </div>
    )    
  }
}

export default App;
