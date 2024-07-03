import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CheckoutScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  PlaceOrder,
  ProfileScreen,
  SignupScreen,
} from './src/screens';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Onboarding">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
