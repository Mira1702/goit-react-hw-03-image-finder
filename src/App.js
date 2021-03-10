import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import './styles.css';

// axios.defaults.headers.common['Authorization'] = 'Bearer 19787930-3152e5d62708cea03366e4b32';


class App extends Component {
  state = {
    hits: [],
    page: 1,
    query: '',
    isLoading: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchHits();
    }
  }

  onChangeSearchQuery = searchQuery => {
    this.setState({ query: searchQuery, page: 1, hits: [] })      
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


  render() {
    const { hits, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeSearchQuery} />
        {isLoading && <h1>Загружаем...</h1>}
        {hits.length > 0 && (
          <ImageGallery hits={hits} />
        )}
        {hits.length > 0 && <button type="button" onClick={this.fetchHits}>Load more</button>}
      </div>
    )    
  }
}

export default App;
