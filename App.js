import React from 'react';
import {View} from 'react-native';
import Routes from './src/Navigations/Route';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
