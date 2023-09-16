import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home,  AddListName, ListName, ListNameDetail, SharePay,BuildList, ListNameDetailEdit, BuildListDetail,BuildListDetailDelete} from '../screens';
import {COLORS, ROUTES} from '../constants';

const Stack = createStackNavigator();

function HomeNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={ROUTES.LOGO_SCREEN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.LIST_NAME} component={ListName} />
      <Stack.Screen name={ROUTES.LIST_NAME_DETAIL} component={ListNameDetail} />
      <Stack.Screen name={ROUTES.LIST_NAME_DETAIL_EDIT} component={ListNameDetailEdit} />
      <Stack.Screen name={ROUTES.ADD_LIST_NAME} component={AddListName} />
      <Stack.Screen name={ROUTES.SHARE_PAY} component={SharePay} />
      <Stack.Screen name={ROUTES.BUILD_LIST} component={BuildList} />
      <Stack.Screen name={ROUTES.BUILD_LIST_DETAIL} component={BuildListDetail} />
      <Stack.Screen name={ROUTES.BUILD_LIST_DETAIL_DELETE} component={BuildListDetailDelete} />

    </Stack.Navigator>
  );
}

export default HomeNavigator;
