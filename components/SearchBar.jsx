import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'

const SearchBar = () => {
  return (
    <View className='px-5 pb-5'>
      <View className='flex flex-row items-center'>
        <View className='flex flex-row items-center w-[85%]'>
            <TextInput placeholder='Search' className='w-[84%] bg-slate-200 p-2 shadow-md rounded-md'/>
            <TouchableOpacity className='p-3 rounded-xl bg-slate-600'>
                <Icon name='search1' size={20} color={'white'}/>
            </TouchableOpacity>
        </View>
        <View className='flex flex-row gap-3'>
            <Icon name='shoppingcart' size={25} color={'#A7A6B4'} />
            <Icon2 name='sliders' size={25} color={'#A7A6B4'} />
        </View>
      </View>
    </View>
  )
}

export default SearchBar