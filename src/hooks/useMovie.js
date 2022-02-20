import { useState, useEffect } from 'react';
import imdb from '../components/apis/imdb';

const useMovie = (defaultSearchTerm) => {
    const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const search = async (searchTerm) => {
        try {
        const response = await imdb.get('/', {
            params: {
            s: searchTerm,
            },
        });
        setMovies(response.data.Search);
        } catch (error) {
        setErrorMessage('Something went wrong');
        }
    };
    
    useEffect(() => {
        search(searchTerm);
    }, [searchTerm]);
    
    return [searchTerm, handleSearchTermChange, movies, errorMessage];
}


export default useMovie;