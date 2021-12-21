import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ButtonComponent = props => {
  return (
    <View style={styles.buttonView}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#ddd' : props.color},
        ]}
        // onLongPress={onPressHandler}
        onPress={props.onPressFunction}
        android_ripple={{color: '#00f', borderless: true}}
        // activeOpacity={0.2}
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'IndieFlower-Regular',
  },
  button: {
    height: 50,
    paddingHorizontal: 20,
  },
  buttonView: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd00',
  },
});

export default ButtonComponent;
