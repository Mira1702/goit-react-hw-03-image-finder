import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button'
import SpinnerLoader from './Components/SpinnerLoader/SpinnerLoader';
import Modal from './Components/Modal/Modal';
import './styles.css';
import getHits from './Services/Api';


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
    // const key = '19787930-3152e5d62708cea03366e4b32';
    const { page, query } = this.state;
    const options = {
      page,
      query
    }
    // const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    
    this.setState({isLoading: true})
    
    getHits(options)      
      .then(data => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...data.hits],
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
