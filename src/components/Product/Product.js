import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from '../../redux/Slices/cartSlice';

const Product = ({item}) => {
  const {cart} = useSelector(state => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
  };

 

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: item.image,
        }}
        style={styles.imageContainer}
      />
      <View style={styles.cardContainer}>
        <Text numberOfLines={1} style={{padding: 3}}>
          {item.title}
        </Text>
        <Text style={{fontWeight: 'bold', padding: 3}}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={addToCart}>
        <View style={styles.cardButton}>
          <Text style={{fontSize: 10, color: 'white'}}>ADD TO CART</Text>
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
    width: 200,
    borderRadius: 5,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 5,
    height: 150,
    width: 100,
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

export default Product;
