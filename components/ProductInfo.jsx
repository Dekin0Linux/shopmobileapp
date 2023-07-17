import { View, Text, Image ,Button, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from './Title';
import Loader from './Loader';


const ProductInfo = ({product,navigation}) => {
    const [cartCount,setCartCount] = useState(0)

    const addCount=()=>{
        setCartCount(prevCount=>prevCount + 1)
    }

    const removeCount=()=>{
        if(cartCount == 0){
            return
        }
        setCartCount(prevCount=>prevCount - 1)
    }

    const getCatItems = async()=>{
        try{
            const cart = await AsyncStorage.getItem('collection')
            return cart ? JSON.parse(cart) : [];
        }catch(err){
            alert("there was an error")
            return [];
        }
    }

    const addTocart=async(item)=>{
        try{
            const itemsInCart = await getCatItems()
            let alreadyInCart = itemsInCart.some(obj=>obj.id === item.id)
            if(alreadyInCart){
                alert('Item already added')
                return
            }
            itemsInCart.push(item)
            await AsyncStorage.setItem('collection',JSON.stringify(itemsInCart))
            alert("Item Added")
        }catch(err){
            alert('Error')
        }
        
    }

    return (
        
        <View className='bg-[#f6f6f6] position-relative'>
            <Title title={'Product Details'} navigation={navigation} name={'Home'}/>
            {/* productImage */}
            <ScrollView contentContainerStyle={{paddingBottom:200}}>
            <View className='w-full h-[370px] bg-white mb-3'>
                <Image source={{uri:product.image}} style={{resizeMode:'contain',width:'100%',height:350}}/>
            </View>

            <View className='p-5 '>
                <Text className='text-[#752fff] font-semibold text-xl'>GHC {product.price}</Text>

                <View className='flex flex-row justify-between my-4'>
                    <Text className='text-[#2d2e4a] font-semibold text-lg w-1/2'>{product.title}</Text>

                    {/* cart counts */}
                    <View className='flex flex-row items-center gap-3'>
                        <Icon2 name='minus' size={20} onPress={removeCount}/>
                        <View className='bg-gray-800 items-center justify-center w-10 h-10 text-center rounded-full'>
                            <Text className='text-white font-bold text-xl'>{cartCount}</Text>
                        </View>
                        <Icon2 name='plus' size={20} onPress={addCount}/>
                    </View>
                </View>

                <Text>
                    {product.description}
                </Text>

                <TouchableOpacity className=' bg-[#752fff] p-5 rounded-md position-absolute top-10' onPress={()=>addTocart({...product,quantity:cartCount})}>
                    <Text className='text-center text-white'>Add TO Cart</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
        
    )
}

export default ProductInfo