import React,{useState,useEffect} from 'react'
import { Image, SafeAreaView, StatusBar, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import SearchBar from '../components/SearchBar'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ProductCard from '../components/ProductCard'

const Ads = [
    {id:1, image:{uri:'https://manychat.com/blog/wp-content/uploads/2021/01/Facebook-ad-CTR.png'}},
    {id:2, image:{uri:'https://website-assets.debutify.com/blogs/DTkMtatDIMsoWVZqLu8nMLcLJr97du4ApRl3Fo38.png?v=1.00'}},
    {id:3, image:{uri:'https://assets-global.website-files.com/60d04aaa36f3d293e9d817c2/63a5f22985e33d65e03857a9_SMS%20Marketing%20for%20Ecommerce.webp'}},
    {id:4, image:{uri:'https://fireapps.io/wp-content/uploads/2020/09/Ads-in-E-Commerce.png'}},

]

function Home({navigation}) {
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth / 2 + 50;

    const [category,setCategory] = useState([])
    const [products,setProducts] = useState([])

    const getCategory = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
            .catch(err=>alert('Network Error'))
    }

    const getProducts = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(err=>alert('Network Error'))
    }

    useEffect(()=>{
        getCategory()
        getProducts()
    },[category])


  return (
    <View className='w-full'>
        
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
            {/* Topbar */}
            <View className='flex justify-between flex-row items-center p-5'>
                <Text className='font-bold text-2xl text-slate-500'>Good Afternoon, Faisal</Text>
                <View className='bg-slate-700 p-1 rounded-full'>
                    <Icon name='user' size={25} color={'white'} />
                </View>
            </View>

            {/* search bar */}
            <SearchBar/>
        <ScrollView contentContainerStyle={{paddingBottom:150}} showsVerticalScrollIndicator={false}>
            {/* Slider */}
            <View className='py-5 pl-5'>
                <FlatList
                data={Ads}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                   <View style={{width:cardWidth, height:150,marginHorizontal:10,overflow:'hidden',borderRadius:10}}>
                    <Image style={{width:cardWidth, height:150}} source={item.image}/>
                   </View>
                )}
                />
            </View>

            {/* Category tabs */}
            <View className='pl-5'>
                <Text className='font-bold text-xl text-gray-600 mb-4'>Category</Text>
                <FlatList
                data={category}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item,index})=>(
                    <TouchableOpacity className='p-4 bg-blue-600 mr-2 rounded-lg'>
                        <Text className='text-white capitalize'>{item}</Text>
                    </TouchableOpacity>
                )}/>

            </View>

            {/* Products */}
            <View className='w-full py-10 px-2 '>
                <View className='flex flex-row flex-wrap justify-center'>
                    {
                        products.map((item,index)=>(
                            <ProductCard key={index} product={item} navigation={navigation}/>
                            // <Text>Hello</Text>
                        ))
                    }

                </View>
               
            </View>

           

    </ScrollView>   
        
    </View>
  )
}

export default Home