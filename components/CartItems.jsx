import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import Title from './Title'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartCard from './CartCard';
import Bottomsheet from './BottomSheet';
import Loader from './Loader';

const CartItems = ({navigation}) => {
 const [cartdata,setCartData] = useState([])
 const [totalCost,setTotalCost] = useState(0)
 const [loading,setLoading] = useState(true)

 const getItems = async()=>{
    try{
        const cart = await AsyncStorage.getItem('collection')
        const data = JSON.parse(cart)
        setCartData(data)
        setLoading(false)

        let cost = data.reduce((acc,curr)=>(
           acc + (curr.price * curr.quantity)
        ),0)
        setTotalCost(cost.toFixed(2))

    }catch(err){
        alert(err)
    }
 }

 const deleteItem=async(index)=>{
    try{
        const cart = await AsyncStorage.getItem('collection') //GETTING ITEMS IN STORAGE
        const data = JSON.parse(cart)

        data.splice(index,1)

        const cartdata = JSON.stringify(data)
        await AsyncStorage.setItem('collection',cartdata) //SETTING NEW ITEMS IN STORAGE
        setCartData(JSON.parse(cartdata))
        
        
    }catch(err){
        alert(err)
    }
 }

 //updating count
 const incCount=async(index)=>{
    try{
        const cart = await AsyncStorage.getItem('collection') //GETTING ITEMS IN STORAGE
        const data = JSON.parse(cart)
        data[index].quantity = data[index].quantity + 1
        const cartdata = JSON.stringify(data)
        await AsyncStorage.setItem('collection',cartdata) //SETTING NEW ITEMS IN STORAGE
        setCartData(JSON.parse(cartdata))
        
    }catch(err){
        alert(err)
    }
 }

 const decCount=async(index)=>{
    try{
        const cart = await AsyncStorage.getItem('collection') //GETTING ITEMS IN STORAGE
        const data = JSON.parse(cart)
        if(data[index].quantity == 0){
            return 
        }
        data[index].quantity = data[index].quantity - 1;
        const cartdata = JSON.stringify(data)
        await AsyncStorage.setItem('collection',cartdata) //SETTING NEW ITEMS IN STORAGE
        setCartData(JSON.parse(cartdata))
        
    }catch(err){
        alert(err)
    }
 }


 useEffect(()=>{
    getItems()
 },[cartdata,deleteItem])

  return (
    <View className='relative h-full'>
        <Title title={'Cart'} navigation={navigation} name={'Home'}/>
      <ScrollView contentContainerStyle={{paddingBottom:190}}>
        <View className=''>
            {
                loading ? <Loader/> : ''
            }
            {
               cartdata.length > 0 ? cartdata.map((item,index)=>(
                    <CartCard key={index} item={item} index={index} deleteItem={deleteItem} add={incCount} remove={decCount}/>
                )):(
                    <View className='flex flex-1 items-center justify-center h-full w-full'>
                        <Text className='font-bold text-2xl'>No Items In Cart</Text>
                    </View>
                )
            }
        </View>
      </ScrollView>

     <Bottomsheet cartdata={cartdata} totalCost={totalCost} navigation={navigation}/>
    </View>
  )
}

export default CartItems