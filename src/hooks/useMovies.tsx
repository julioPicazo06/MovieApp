import { useEffect, useState } from "react"
import movieDB from "../api/MovieDb"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"


export const useMovies = () => {

    const [loading, setLoading] = useState(true)
    const [peliculasCine, setPeliculasCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const res = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setPeliculasCine(res.data.results)
        setLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])


    return {
        peliculasCine,
        loading
    }

}