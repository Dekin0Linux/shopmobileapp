import { View, Text,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductInfo from '../components/ProductInfo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'

const ProductDetails = ({navigation,route}) => {
  const {id} = route.params
  const [product,setProduct] = useState({})

  const getItem=()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(err=>alert('Network Error'))
  }
  useEffect(()=>{
    getItem()
  },[])



  return (
    <View>
      {
        product && <ProductInfo product={product} navigation={navigation}/>
      }
    </View>
  )
}

export default ProductDetails