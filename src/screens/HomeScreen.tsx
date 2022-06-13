import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {
    const { peliculasCine ,loading } = useMovies()
    const { top } = useSafeAreaInsets()


    if( loading ) {
        return (
            <Loading />
        )
    }
  return (
        <View style={ {
            marginTop : top + 20
        } }>
            <Text>
                <MoviePoster movie={ peliculasCine[0] } />
            </Text>
         
        </View>
    )
}
