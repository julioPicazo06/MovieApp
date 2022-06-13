import React from 'react'
import {ActivityIndicator, Dimensions, FlatList, Text, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import {Loading} from '../components/Loading'
import {MoviePoster} from '../components/MoviePoster'
import {useMovies} from '../hooks/useMovies'

const {width: windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {
  const {peliculasCine, loading} = useMovies()
  const {top} = useSafeAreaInsets()

  if (loading) {
    return <Loading />
  }
  return (
    <View
      style={{
        marginTop: top + 20,
      }}>
      {/* <Text>
                <MoviePoster movie={ peliculasCine[0] } />
            </Text> */}

      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={peliculasCine}
          renderItem={({item}): any => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>

      <View
        style={{
          backgroundColor: 'red',
          height: 250,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          En cine
        </Text>

        <FlatList
          data={peliculasCine}
          renderItem={({item}): any => (
            <MoviePoster movie={item} height={200} width={140} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
