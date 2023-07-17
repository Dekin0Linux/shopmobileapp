import { View, Text } from 'react-native'
import React from 'react'
import Loader from '../components/Loader'
import PaymentInfo from '../components/Payment'

const Payment = ({navigation}) => {

  return (
    <View>
      {/* <Loader/> */}
      <PaymentInfo navigation={navigation}/>
      
    </View>
  )
}

export default Payment