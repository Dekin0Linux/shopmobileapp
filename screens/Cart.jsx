import { View, Text } from 'react-native'
import React from 'react'
import CartItems from '../components/CartItems'

const Cart = ({navigation}) => {
  return (
    <View>
      <CartItems navigation={navigation}/>
    </View>
  )
}

export default Cart