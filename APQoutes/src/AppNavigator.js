import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from './Screens/Screen1'
import Login from './Screens/Login'
import Email from './Screens/Email'

const AppNavigator = () => {
    const Stack=createStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen  name='Screen1' component={Screen1} options={{headerShown:false}} />
        <Stack.Screen  name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen  name='Email' component={Email} options={{headerShown:false}} />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default AppNavigator