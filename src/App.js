import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
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
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${this.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    axios
      .get(url)
      .then(response => {        
        this.setState({
          hits: response.data.hits,
        })
      });
    console.log(searchQuery)
  }
  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeSearchQuery}/>
        <ul>
          {hits.map(({ id }) => (
            <li key={id}>
              <img src="{{webformatURL}}" alt="photo" width="260" data-image="{{largeImageURL}}" />
            </li>
          ))}
        </ul>
      </div>
    )
    
  }

}

export default App;
