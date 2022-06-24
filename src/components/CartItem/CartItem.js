import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from '../../redux/Slices/cartSlice';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  console.log(item.id);
  console.log(item);
  //here i am getting an id of product which i have

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.imageContainer}
      />
      <View style={styles.cardContainer}>
        <Text numberOfLines={1} style={{padding: 3}}>
          {item.title}
        </Text>
        <Text style={{fontWeight: 'bold', padding: 3}}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(remove(item.id))}>
        <View style={styles.cardButton}>
          <Text style={{fontSize: 10, color: 'white'}}>REMOVE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 5,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 5,
    height: 300,
    width: 300,
  },
  cardContainer: {
    marginVertical: 10,
  },
  cardButton: {
    elevation: 3,
    backgroundColor: 'grey',
    alignItems: 'center',
    height: 25,
    width: 100,
    justifyContent: 'center',
    borderRadius: 5,
  },
  cardContentContainer: {},
});

export default CartItem;
