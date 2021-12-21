import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCities} from '../redux/actions';
import PushNotification from 'react-native-push-notification';
import navigationStrings from '../Constants/navigationStrings';

const ProductDetails = ({navigation}) => {
  const {cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleNotification = (item, index) => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId: 'text-channel',
      title: 'You Clicked on ' + item.country,
      message: item.city,
      bigText:
        item.city + ' is one of the largest and beautiful city in the world.',
      color: 'red',
      id: index,
    });

    PushNotification.localNotificationSchedule({
      channelId: 'text-channel',
      title: 'Alarm',
      message: 'You clicked on ' + item.country + ' 20 secounds ago.',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text>ProductDetails</Text>

      <FlatList
        data={cities}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              // handleNotification(item, index);
              navigation.navigate(navigationStrings.MAP, {city: item.city});
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.country}</Text>
              <Text style={styles.subtitle}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
    fontSize: 25,
    margin: 10,
  },
  subtitle: {
    color: '#ccc',
  },
});

export default ProductDetails;
