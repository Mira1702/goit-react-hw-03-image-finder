import React, { Component } from 'react';
import styles from './Searchbar.module.css';

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
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={styles.SearchFormInput}
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