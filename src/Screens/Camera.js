import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import ButtonComponent from '../Components/ButtonComponent';
import RNFS from 'react-native-fs';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log('CAMERA DATA: ' + data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
      // <-- This line is giving me WARNING message about <<new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.>>
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED ', filePath, ' -- to -- ', newFilePath);
        })
        .catch(error => {
          console.log('IMAGE Moving Error: ', error);
        });
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
