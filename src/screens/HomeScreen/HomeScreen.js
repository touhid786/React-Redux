import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import {products} from '../../data/Data';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const renderItem = ({item}) => <Product item={item} />;
  return (
    <View style={{alignItems: 'center'}}>
      <Header />
      <ScrollView>
        <FlatList
          contentContainerStyle={{marginBottom: 50,marginTop:5}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
