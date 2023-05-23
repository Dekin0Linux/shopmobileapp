import { View, Text,Dimensions ,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


const ProductCard = ({navigation,product}) => {
    const screenWidth = Dimensions.get('window').width;
    // const cardWidth = screenWidth / 2;
    // 

    const id = product.id
    return (
        <TouchableOpacity 
        style={{borderRadius:10,backgroundColor:'white',padding:5,elevation:2,shadowColor:'gray',width:'47%',margin:3}} 
        onPress={()=>{navigation.navigate("ProductDetails",{id})}}>
        
                <View className='w-full h-[180px]'>
                    <Image source={{uri:product.image}} style={{width:'100%',height:180,resizeMode:'contain'}} />
                </View>
                
                <View className='p-3'>
                    <Text className='font-semibold text-lg text-slate-600' numberOfLines={1} ellipsizeMode="tail">{product.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail">{product.description}</Text>
                </View>

                <View className='p-3 flex flex-row '>
                    <Text className='font-bold text-xl'>GHC{product.price}</Text>

                </View>
        </TouchableOpacity>
    )
}

export default ProductCard