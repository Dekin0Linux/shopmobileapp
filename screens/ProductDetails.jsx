import { View, Text,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import ProductInfo from '../components/ProductInfo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
import Loader from '../components/Loader'

const ProductDetails = ({navigation,route}) => {
  const {id} = route.params
  const [product,setProduct] = useState({})
  const [loading,setLoading] = useState(true)

  const getItem=()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
              setProduct(json)
              setLoading(false)
            })
            .catch(err=>alert('Network Error'))
  }
  useEffect(()=>{
    getItem()
  },[])



  return (
    <View>
      {loading ? <Loader/> : ''}
      {
        
        !loading && product && <ProductInfo product={product} navigation={navigation}/>
      }
    </View>
  )
}

export default ProductDetails