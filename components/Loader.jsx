import { View, Text,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
  
  return (
    <View className='w-full h-full flex justify-center'>
      <ActivityIndicator size={50} color={'black'}/>
      <Text className='text-center'>Loading</Text>
    </View>
  )
}

export default Loader