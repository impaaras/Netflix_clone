import React, {useState, useEffect} from 'react';
import request from './request';
import axios from './axios'
import './App.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
        {/* movie title */}
        <h2>{title}</h2>

        {/* poster */}
        <div className="row_posters">
        {movies.map((movie) => (
            <img
            key={movie.id}
            className={`row_image ${isLargeRow && "row_posterImage"}`}
             src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
        ))}
           
        </div>
        </div>
    )
}

export default Row;
