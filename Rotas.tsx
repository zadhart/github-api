import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Procura from './Pesquisa';
import Lista from './Lista';


export type RootStackParamList = {
    Lista: undefined;
    Procura: undefined;
  };
  
export const Stack = createStackNavigator<RootStackParamList>();
  
 const MainNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Procura">
        <Stack.Screen
          name="Procura"
          component={Procura}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
        />
      </Stack.Navigator>
    );
};

export default MainNavigator;