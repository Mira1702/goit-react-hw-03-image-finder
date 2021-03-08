import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import './styles.css';

// axios.defaults.headers.common['Authorization'] = 'Bearer 19787930-3152e5d62708cea03366e4b32';


class App extends Component {
  state = {
    hits: [],
    page: 1
  };
  componentDidMount() {
    
  }

  onChangeSearchQuery = searchQuery => {    
    const key = '19787930-3152e5d62708cea03366e4b32';
    const { page } = this.state;
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    axios
      .get(url)
      .then(response => {        
        this.setState({
          hits: response.data.hits,
        })
      });
    
  }
  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeSearchQuery}/>
        <ImageGallery hits={hits}/>
      </div>
    )
    
  }

}

export default App;
