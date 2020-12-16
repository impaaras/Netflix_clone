import React, { useEffect, useState } from 'react'
import requests from './request';
import axios from './axios'
import Navbar from './Navbar';


function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    (Math.floor(Math.random()*request.data.results.length - 1))
                    ]
            );
            return request;
        }
        fetchData();
    }, []);
    
    console.log(movie);
    function over(str, n){
        return str?.length>n?str.substr(0,n-1 ) + "..." : str;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                    backgroundPosition:"center center"
            }}
            >
            <Navbar/>
            <div className="banner_components">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <button className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
                <h1 className="banner_discription">{over(movie.overview,180)}</h1>
            </div>
            <div className="fade_color"></div>
        </header>
    )
}

export default Banner;