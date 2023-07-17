import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Modal from 'react-native-modal';

const BottomSheet = ({cartdata,totalCost,navigation}) => {
    const handleNavigate=()=>{
        navigation.navigate('PaymentInfo',{cartdata,totalCost})
    }
 
  return (
    <View className='bg-white shadow-md absolute bottom-0 w-[100%] rounded-t-md p-3'>
        <Text className='text-center py-2 font-bold'>Order Info</Text>
        <View className='flex-row justify-between '>
            <Text>Subtotal ({cartdata.length} items)</Text>
            <Text>{totalCost}</Text>
        </View>
        <View className='flex-row justify-between my-2'>
            <Text>Delivery</Text>
            <Text>Free</Text>
        </View>

        <View className='flex-row justify-between'>
            <Text className='font-semibold'>Total</Text>
            <Text className='font-semibold'>GHC {totalCost}</Text>
        </View>

        <TouchableOpacity className=' bg-[#752fff] p-3 my-2 rounded-md' onPress={handleNavigate}>
            <Text className='text-center text-white'>Order Now</Text>
        </TouchableOpacity>
     </View>
  )
}

export default BottomSheet