//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../Constants/GlobalStyle';
// import MapView from 'react-native-maps';

export default function Map({route}) {
  const {city} = route.params;
  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.CustomFont]}>{city}</Text>
      {/* <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      /> */}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
