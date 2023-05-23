import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'

const Title = ({title,navigation}) => {
  return (
    <View className='flex flex-row justify-between bg-white p-5'>
        <Icon name='arrow-back-ios' size={25} onPress={()=>{navigation.navigate('Home')}} className='bg-slate-200 p-2 rounded-lg'/>
        <Text className='font-bold text-xl'>{title}</Text>
        <Icon2 name='dots-three-vertical' size={25}/>
    </View>
  )
}

export default Title