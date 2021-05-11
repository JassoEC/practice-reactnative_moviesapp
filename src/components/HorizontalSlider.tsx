import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movie.interface';
import {MovieCard} from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left',
            marginLeft: 5,
            marginVertical: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={(item: Movie) => item.id.toLocaleString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
