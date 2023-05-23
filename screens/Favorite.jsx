import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Loader from '../components/Loader'

const Favorite = () => {
  const [loading,setLoading] = useState(true)

  const timer = setTimeout(function(){
    setLoading(true)
  },3000)


  return (
    <View>
      {
        loading ? <Loader/> : 'No items in in favorite'
      }
      
    </View>
  )
}

export default Favorite