import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Title from './Title'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartCard from './CartCard';

const CartItems = ({navigation}) => {
 const [cartdata,setCartData] = useState([])

 const getItems = async()=>{
    try{
        const cart = await AsyncStorage.getItem('collection')
        const data = JSON.parse(cart)
        data.reverse()
        setCartData(data)
    }catch(err){
        alert(err)
    }
 }

 const deleteItem=async(index)=>{
    try{
        const cart = await AsyncStorage.getItem('collection') //GETTING ITEMS IN STORAGE
        const data = JSON.parse(cart)
        const newArr = data.splice(index,1)
        const cartdata = JSON.stringify(newArr)
        await AsyncStorage.setItem('collection',cartdata) //SETTING NEW ITEMS IN STORAGE
        setCartData(JSON.parse(cartdata))
        alert('deleted')
        
        
    }catch(err){
        alert(err)
    }
 }

 //updating count
 const updateCount=async(index)=>{

 }



 useEffect(()=>{
    getItems()
 },[cartdata,deleteItem])

  return (
    <View>
        <Title title={'Cart'} navigation={navigation}/>
      <ScrollView contentContainerStyle={{paddingBottom:190}}>
        <View className=''>
            {
               cartdata.length > 0 ? cartdata.map((item,index)=>(
                    <CartCard key={index} item={item} index={index} deleteItem={deleteItem} />
                )):(
                    <View>
                        <Text>No Items In Cart</Text>
                    </View>
                )
            }
        </View>

      </ScrollView>
    </View>
  )
}

export default CartItems