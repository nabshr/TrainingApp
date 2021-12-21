import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import ButtonComponent from '../Components/ButtonComponent';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log('CAMERA DATA: ' + data.uri);
    } catch (error) {
      console.log('CAMERA Error: ' + error);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <ButtonComponent
          title="Capture"
          color="#1eb900"
          onPressFunction={() => {
            captureHandle();
          }}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
