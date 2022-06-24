import 'react-native-gesture-handler';
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Routes from './src/navigations/Routes';
import { store } from '../../zezo/ReduxToolKit/src/redux/Store';

const App = () => {
  return(
    <Provider store={store}>
    <Routes/>
    </Provider>

  )
};

export default App;
