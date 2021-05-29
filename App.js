/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/RootNavigator';
import { withAuthenticator } from 'aws-amplify-react-native'

navigator.geolocation = require('@react-native-community/geolocation')

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const App: () => Node = () => {

  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "UberClone App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermissions()
    } else {
      Geolocation.requestAuthorization()
    }
  }, [])

  return (
    < >
      <StatusBar />
      <RootNavigator />
    </>
  );
};


export default withAuthenticator(App);
