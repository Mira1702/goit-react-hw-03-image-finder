import axios from 'axios';

const key = '19787930-3152e5d62708cea03366e4b32';
axios.defaults.baseURL = `https://pixabay.com/`;




const fetchGetHits = ({ query, page, perPage = 12 }) => {
    return axios
        .get(`/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`,)
        .then(response => response.data)
}

export default fetchGetHits;