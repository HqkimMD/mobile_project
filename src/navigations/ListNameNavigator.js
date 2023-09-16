import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddListName, ListName, ListNameDetail, } from '../screens';
import {ROUTES} from '../constants';


const Stack = createStackNavigator();

function ListNameNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGO_SCREEN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.LIST_NAME} component={ListName} />
      <Stack.Screen name={ROUTES.LIST_NAME_DETAIL} component={ListNameDetail} />
      <Stack.Screen name={ROUTES.ADD_LIST_NAME} component={AddListName} />
    </Stack.Navigator>
  );
}

export default ListNameNavigator;
