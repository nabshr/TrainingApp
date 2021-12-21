import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

// create a component
const TextInputComponent = props => {
  return (
    <TextInput
      //   onTextInput="nabin"
      style={[styles.textInput, {marginTop: props.topMargin}]}
      placeholder={props.placeHolder}
      onChangeText={props.changeText}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  textInput: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
});

export default TextInputComponent;
