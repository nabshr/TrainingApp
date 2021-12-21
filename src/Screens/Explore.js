import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import GlobalStyle from '../Constants/GlobalStyle';
import navigationStrings from '../Constants/navigationStrings';
// import navigationStrings from '../Constants/navigationStrings';

const Explore = ({navigation, route}) => {
  // console.log('Routes', route.params.title);

  //   const onPressHandler = () => {
  //     // onPress={() => navigation.navigate(navigationStrings.HOME)}
  //     navigation.goBack();
  //   };

  // const {title} = route.params;
  // const title = route.params.title;

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.CustomFont]}>Explore</Text>
      {/* <Text>{title}</Text> */}
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.HOME);
        }}
        title="Home"
        color="#f0f"
      />
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.PROFILE);
        }}
        title="Profile"
        color="#ff0"
      />
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.SEARCH);
        }}
        title="Search"
        color="#26abff"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});

export default Explore;
