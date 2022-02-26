import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
export type RootStackParams = {
  HomeScreen: undefined,
//   AhorroScreen: undefined

} 

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="AhorroScreen" component={AhorroScreen} /> */}
    </Stack.Navigator>
  );
}