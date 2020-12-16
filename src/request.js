const API_key = "ea0d07ef8f959376d3b9380bc1ad0a67";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated/?api_key=${API_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
    fetchthrill:`/discover/movie?api_key=${API_key}&with_genres=18`,
}
export default request;