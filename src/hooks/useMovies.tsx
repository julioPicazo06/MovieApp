import { useEffect, useState } from "react"
import movieDB from "../api/MovieDb"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"


export const useMovies = () => {

    const [loading, setLoading] = useState(true)
    const [peliculasCine, setPeliculasCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const { data:{ results } } = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setPeliculasCine(results)
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