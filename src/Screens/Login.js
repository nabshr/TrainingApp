import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import navigationStrings from '../Constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputComponent from '../Components/TextInputComponent';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../redux/actions';
import PushNotification from 'react-native-push-notification';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log('DATABASE ERROR: ' + error);
  },
);
// create a component
export default function Login({navigation}) {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
    getData();
    createChannels();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'text-channel',
      channelName: 'Text Channel',
    });
  };

  const getData = () => {
    try {
      //   AsyncStorage.getItem('UserName').then(value => {
      //     if (value != null) {
      //       navigation.navigate(navigationStrings.TABS);
      //     }
      //   });
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            navigation.navigate(navigationStrings.TABS);
          }
        });
      });
    } catch (error) {
      console.log('GET data error: ' + error);
    }
  };

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning', 'Please write your name and age.');
    } else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        // var user = {
        //   Name: name,
        //   Age: age,
        // };
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        await db.transaction(async tx => {
          //   await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ')',
          //   );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);
        });
        navigation.navigate(navigationStrings.TABS);
      } catch (error) {
        console.log('Async Error: ' + error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/redux.png')}
      />
      {/* <Text style={styles.logoText}>Async Storage</Text> */}
      {/* <Text style={styles.logoText}>SQLite Storage</Text> */}
      <Text style={styles.logoText}>Redux</Text>
      <TextInputComponent
        changeText={value => dispatch(setName(value))}
        topMargin={130}
        placeHolder={'Enter your name'}
      />
      <TextInputComponent
        changeText={value => dispatch(setAge(value))}
        topMargin={20}
        placeHolder={'Enter your age'}
      />
      <ButtonComponent
        title="Login"
        color="#1eb900"
        onPressFunction={setData}
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0dffd0',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  logoText: {
    fontSize: 35,
    color: '#fff',
    fontFamily: 'IndieFlower-Regular',
  },
});
