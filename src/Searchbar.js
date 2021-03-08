import React, { Component } from 'react';
import './styles.css';

class Searchbar extends Component {
    state = { searchQuery: '' }
    
    handleChange = event => {
        this.setState({searchQuery: event.currentTarget.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.searchQuery)
        this.setState({ searchQuery: ''})
    }


    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;