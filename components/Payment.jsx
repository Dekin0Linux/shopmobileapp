import { View, Text, Image, TouchableOpacity, TouchableOpacityBase, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Title from './Title'
import { PaymentIcon } from 'react-native-payment-icons'
import BotomSheet from './BotomSheet'
import { TextInput } from 'react-native-gesture-handler'


const Method=({name})=>{
  const [selected,setSelected]=useState(false)

  const handleClick=()=>{
    setSelected(!selected)
  }
  return(
    <View className='flex-row justify-between bg-blue-100 p-6 rounded-md shadow-md my-2'>
      <View className='flex-row gap-x-2'>
        <PaymentIcon type={name} width={33}/>
        <Text className='font-semibold capitalize'>{name}</Text>
      </View>
      <TouchableOpacity onPress={handleClick} className={`border w-4 h-4 rounded-full border-blue-700 ${selected? 'bg-blue-800':''}`} />
    </View>
  )
}

const PaymentInfo = ({navigation}) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  let nextPage =()=>{
    console.warn(navigation)
  }

  return (
    <View>
    <ScrollView>
      <Title title={'Payment Info'} navigation={navigation} name='Cart'/>


      <View className='p-2'>
        <Text className='font-semibold'>Your Card</Text>
      </View>

      <View className='w-[100%] h-[200px] overflow-hidden rounded-lg shadow-xl'>
        <Image source={{uri:'https://www.ababank.com/fileadmin/user_upload/Payment_Cards/Debit/ABA_Visa_Classic_Debit.png'}} style={{width:'100%',height:200,resizeMode:'contain'}}/>
      </View>

      <View className='p-5 my-1'>
        <Method name={'visa'}/>
        <Method name={'mastercard'}/>
        <Method name={'paypal'}/>

        <TouchableOpacity onPress={openBottomSheet} className='mb-5 mt-2 border-dashed p-3 border border-blue-600 '>
          <Text className='text-center'>Add New Payment Method</Text>
        </TouchableOpacity>

        <TouchableOpacity className='my-2 p-3 bg-blue-600 rounded-md' onPress={nextPage}>
          <Text className='text-center text-white'>Continue</Text>
        </TouchableOpacity>
          
      </View>
      </ScrollView>

      {isBottomSheetOpen ? (
        <BotomSheet >
          <View className='p-5 bg-blue-50'>
            <Text className='text-center font-semibold'>Card Details</Text>
            <TextInput className='bg-white p-2 rounded-md my-2' placeholder='Name on card'/>
            <TextInput keyboardType="numeric" className='bg-white p-2 rounded-md my-2' placeholder='Card Number'/>

            <View className='flex-row gap-[5%] '>
              <TextInput className='bg-white p-2 rounded-md my-2 w-[45%]' placeholder='Expire Date'/>
              <TextInput className='bg-white p-2 rounded-md my-2 w-[45%]' placeholder='CVV'/>
            </View>

            <View className='flex-row gap-[5%]'>
              <TouchableOpacity className='my-2 p-3 border-blue-600 border rounded-md w-[45%]' onPress={openBottomSheet}>
                <Text className='text-center text-blue-600'>Cancel</Text>
              </TouchableOpacity>

              
              <TouchableOpacity className='my-2 p-3 bg-blue-600 rounded-md w-[45%]'>
                <Text className='text-center text-white'>Confirm</Text>
              </TouchableOpacity>

            </View>
            
            
          </View>
        </BotomSheet>
      ):''}
      
      
    
    </View>
  )
}

export default PaymentInfo