import {View, Text} from 'react-native';
import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import {useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const CartScreen = () => {
  const {cart} = useSelector(state => state);
  const renderItem = ({item}) => <CartItem item={item} />;
  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView>
        <FlatList
          contentContainerStyle={{marginBottom: 50, marginTop: 5}}
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default CartScreen;
