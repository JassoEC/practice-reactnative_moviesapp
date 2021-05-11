import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movie.interface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = ({movie, height = 420, width = 300}: Props) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{width, height, marginHorizontal: 10}}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.cardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
});
