import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import navigationStrings from '../Constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputComponent from '../Components/TextInputComponent';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setAge,
  increaseAge,
  decreaseAge,
  getCities,
} from '../redux/actions';
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

const Home = ({navigation}) => {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData').then(value => {
      //   if (value != null) {
      //     let user = JSON.parse(value);
      //     setName(user.Name);
      //     setAge(user.Age);
      //   }
      // });
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var userName = results.rows.item(0).Name;
            var userAge = results.rows.item(0).Age;
            dispatch(setName(userName));
            dispatch(setAge(userAge));
            // setName(userName);
            // setAge(userAge);
          }
        });
      });
    } catch (error) {
      console.log('GET data error: ' + error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'Please write your name.');
    } else {
      try {
        // var user = {
        //   Name: name,
        //   Age: age,
        // };
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        // Alert.alert('Success!', 'Your name has been updated.');
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE Users SET Name=?, Age=?',
            [name, age],
            () => {
              Alert.alert('Success!', 'Your name has been updated.');
            },
            error => {
              console.log('DATABASE UPDATE Error: ' + error);
            },
          );
        });
      } catch (error) {
        console.log('Async Error: ' + error);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('UserName');
      // // await AsyncStorage.clear();
      // navigation.navigate(navigationStrings.LOGIN);
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Users',
          [],
          () => {
            navigation.navigate(navigationStrings.LOGIN);
            Alert.alert('Logout!', 'Successfully Logged Out');
          },
          error => {
            console.log('USER REMOVE Error: ' + error);
          },
        );
      });
    } catch (error) {
      console.log('Async Error: ' + error);
    }
  };

  const onPressHandler = () => {
    navigation.navigate(
      navigationStrings.EXPLORESTACK,
      {
        screen: navigationStrings.SEARCH,
        params: {user: 'Genji Nabin Shrestha', email: 'nabshr.ns@gmail.com'},
      },

      // {title: 'Nabin Shrestha'}
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <Text style={styles.text}>Your Age : {age} </Text>
      <Button title="Go to Profile" onPress={onPressHandler} />
      <ButtonComponent
        onPressFunction={() => {
          navigation.navigate(navigationStrings.PRODUCT_DETAILS);
        }}
        title="Product Details"
        color="#ff0"
      />

      <TextInputComponent
        changeText={value => dispatch(setName(value))}
        topMargin={20}
        placeHolder={'Update your name'}
      />
      <TextInputComponent
        changeText={value => dispatch(setAge(value))}
        topMargin={20}
        placeHolder={'Update your age'}
      />
      <ButtonComponent
        title="Update"
        color="#ff7f00"
        onPressFunction={updateData}
      />
      <ButtonComponent
        title="Logout"
        color="#f40100"
        onPressFunction={removeData}
      />
      <ButtonComponent
        title="Age +"
        color="#ccc"
        onPressFunction={() => {
          dispatch(increaseAge());
        }}
      />
      <ButtonComponent
        title="Age -"
        color="#aaa"
        onPressFunction={() => {
          dispatch(decreaseAge());
        }}
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
  text: {
    color: '#000',
    fontFamily: 'IndieFlower-Regular',
    fontSize: 30,
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 16,
  },
  subtitle: {
    color: '#ccc',
  },
});

export default Home;
