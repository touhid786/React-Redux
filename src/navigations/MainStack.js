import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import CartScreen from '../screens/CartScreen/CartScreen'


const MainStack = (Stack) => {
  return (
   <>
    <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

<Stack.Screen
          name="CartScreen"
          component={CartScreen}
        />
   </>
  )
}

export default MainStack