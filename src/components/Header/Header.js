import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  
  const {cart} = useSelector(state => state);
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.iconTextStyle}>REACT REDUX</Text>
      </View>
      <View>
        <TouchableOpacity
        onPress={
          ()=>navigation.navigate('CartScreen')
        }
        style={styles.iconConatiner}>
          <AntDesign name="shoppingcart" size={24} />
          <View style={styles.cartItemCouter}>
            <Text style={styles.cartItemCounterText}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  iconStyle: {
    color: 'grey',
  },
  iconTextStyle: {
    fontWeight: 'bold',
    color: 'grey',
  },
  cartItemCouter: {
    height: 15,
    width: 15,
    backgroundColor: 'grey',
    position: 'absolute',
    borderRadius: 20,
    bottom: 25,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemCounterText: {
    fontSize: 10,
    color: 'white',
  },
  textContainer: {
    height: 50,
    width: '90%',
    justifyContent:"center",
    padding:10,
  },
  iconConatiner: {
    height: 50,
    width: 45,
    justifyContent: 'center',
  },
});

export default Header;
