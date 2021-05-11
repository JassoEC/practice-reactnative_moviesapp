import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovie';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWith} = Dimensions.get('window');

export const HomeScreen = () => {
  const {
    getMovies,
    isloading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    getMovies();
  }, []);

  if (isloading) {
    return (
      <View>
        <ActivityIndicator color="red" size={150} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 10}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MovieCard movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider movies={popular} title="Populares" />
        <HorizontalSlider movies={topRated} title="Top rated" />
        <HorizontalSlider movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
