import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, SharePay, } from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function SharePayNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGO_SCREEN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.SHARE_PAY} component={SharePay} />
    </Stack.Navigator>
  );
}

export default SharePayNavigator;
