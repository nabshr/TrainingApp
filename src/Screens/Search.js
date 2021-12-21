import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

const Search = ({navigation, route}) => {
  if (route.params != null) {
    const {user, email} = route.params;
    // navigation.setParams({user: 'Nabin'});
    Alert.alert('Welcome', 'Name: ' + user + '\n' + 'Email: ' + email);
  } else {
    null;
  }
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Search;
