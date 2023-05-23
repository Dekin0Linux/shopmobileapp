import { View, Text ,Image} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'

const CartCard = ({item,deleteItem,index}) => {
    const [cartCount,setCartCount] = useState(0)

    const addCount=(item)=>{
        alert(cartCount+1)
    }

    const removeCount=()=>{
        alert('1')
    }

  return (
    <View className='flex flex-row m-2 px-3 py-5 rounded bg-white'>
        <View className='w-20 h-20 p-1  overflow-hidden'>
            <Image source={{uri:item.image}} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
        </View>
        <View className='flex-1'>
            <Text className='font-bold text-lg text-slate-700' numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
            <Text>{item.category}</Text>
            <Text className='font-bold text-lg'>{item.price}</Text>
        </View>

        <View className='flex justify-between items-end'>
            <View>
                <Icon2 name='trash' size={20} color={'red'} onPress={()=>deleteItem(index)}/>
            </View>
            <View className='flex flex-row items-center gap-3'>
                <Icon2 name='minus' size={15} onPress={removeCount}/>
                <View className='bg-gray-800 items-center justify-center w-6 h-6 text-center rounded-full'>
                    <Text className='text-white font-bold'>{item.quantity}</Text>
                </View>
                <Icon2 name='plus' size={15} onPress={addCount}/>
            </View>
        </View>

        
    </View>
  )
}

export default CartCard