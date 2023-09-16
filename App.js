// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';

import AuthNavigator from './src/navigations/AuthNavigator';
import { firebase } from '@react-native-firebase/firestore';
import { BottomNavigation } from 'react-native-paper';


export default function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() =>{
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber
  // }, []);

  // if (initializing) return null;

  // if (!user){
  //   return (
  //     <NavigationContainer>
  //       {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
  //       <BottomNavigation/>
  //     </NavigationContainer>
  //   );
  // }
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );

  // isAuthenticated = is...
  // return (
  //   <NavigationContainer>
  //     {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
  //     <AuthNavigator />
  //   </NavigationContainer>
  // );
}
