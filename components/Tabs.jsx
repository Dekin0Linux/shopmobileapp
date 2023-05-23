import React from 'react'
import "react-native-gesture-handler"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Favorite from '../screens/Favorite'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'


import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()



function Tabs() {
  return (
    
        <Tab.Navigator 
        screenOptions={{
                    tabBarShowLabel : true,
                    tabBarStyle :{
                        opacity:0.8,
                        elevation : 2,
                    },
                    tabBarActiveTintColor:'purple',
                    headerShown : false,
                   
                    
                }}
        
        >
            <Tab.Screen name="Home" component={Home} 
            options={{headerShown:false,
                tabBarIcon : (({focused,color})=>(
                    <Icon name='home' size={25} color={focused?'purple':color}/>
                ))
            }}
            
            />
            <Tab.Screen name="Favorite" component={Favorite}
            options={{headerShown:false,
                tabBarIcon : (({focused,color})=>(
                    <Icon name={focused?'heart-fill':'heart'} size={25} color={focused?'purple':color}/>
                ))
            }}
            
            />
            <Tab.Screen name="Cart" component={Cart} 
            options={{headerShown:false,
                tabBarIcon : (({focused,color})=>(
                    <Icon2 name={'shoppingcart'} size={25} color={focused?'purple':color}/>
                ))
            }}
            />
            <Tab.Screen name="Profile" component={Profile}
            options={{headerShown:false,
                tabBarIcon : (({focused,color})=>(
                    <Icon2 name={'user'} size={25} color={focused?'purple':color}/>
                ))
            }}
             />
        </Tab.Navigator>
   
  )
}

export default Tabs