import axios from "axios";


const movieDB = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '29bef328e031416c5bcef1e5c81cc7ea',
        lenguage: 'es-ES'
    }
})

export default movieDB