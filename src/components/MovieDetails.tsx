import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/credits.interfaces';
import {MovieFullResponse} from '../interfaces/movie.interface';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFullResponse;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_count}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Sinopsis
          </Text>
          <Text style={{fontSize: 16, textAlign: 'justify'}}>
            {movieFull.overview}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Presupuesto
          </Text>
          <Text style={{fontSize: 16, textAlign: 'justify'}}>
            {currencyFormatter.format(movieFull.budget, {code: 'MXN'})}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Casting
        </Text>
        <FlatList
          style={{marginTop: 10, height: 70}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
        />
      </View>
    </>
  );
};
