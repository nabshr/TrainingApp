//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import navigationStrings from '../Constants/navigationStrings';
// import navigationStrings from '../Constants/navigationStrings';

// create a component
const Profile = ({navigation, route}) => {
  // console.log('Routes', route.params.title);

  const onPressHandler = () => {
    // onPress={() => navigation.navigate(navigationStrings.HOME)}
    navigation.goBack();
  };

  // const {title} = route.params;
  // const title = route.params.title;

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      {/* <Text>{title}</Text> */}
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate(navigationStrings.HOME)}
        onPress={onPressHandler}
      />
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.EDIT_PROFILE);
        }}
        title="Edit Profile"
        color="#f0f"
      />
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.CAMERA);
        }}
        title="Open Camera"
        color="#f003"
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

//make this component available to the app
export default Profile;
