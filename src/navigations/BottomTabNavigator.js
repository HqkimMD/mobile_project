import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { StyleSheet} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import {Home, Notifications} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileNavigator from './ProfileNavigator';
import CustomTabBarButton from '../components/CustomTabBarButton';
import {useNavigation} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
          headerShown: false,
          tabBarLabel: ' ',
          tabBarShowLabel: true,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.primary,
          tabBarHideOnKeyboard: true,
          
          // tabBarIcon: ({color, size}) => (
          //   <FontAwesome5 name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarLabel: ' ',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.primary,
          tabBarHideOnKeyboard: true,
          tabBarButton: props => <CustomTabBarButton {...props} />,
          // tabBarIcon: ({color, size}) => (
          //   <FontAwesome5 name="chart-bar" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE_NAVIGATOR}
        component={ProfileNavigator}
        options={{
          tabBarLabel: ' ',
          title: ' ',
          headerShown: false,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.primary,
          tabBarHideOnKeyboard: true,
          tabBarButton: props => (
            <CustomTabBarButton route="settings" {...props} />
          ),
          // tabBarIcon: ({color, size, height}) => (
          //   <FontAwesome5 name="user-plus" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    // bottom: 5,
    // right: 10,
    // left: 10,
    height: 60,
  },
});
