import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { Tarefa } from '../pages/Tarefa'

const stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Tarefa" component={Tarefa} />
      </stack.Navigator>
    </NavigationContainer>
  )
}