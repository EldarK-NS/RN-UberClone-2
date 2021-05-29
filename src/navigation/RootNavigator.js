import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function RootNavigator(props) {
    return (
        <NavigationContainer >
            <Drawer.Navigator drawerContent={(props) => (< CustomDrawer {...props} />)}>
                <Drawer.Screen name="Home" component={HomeNavigator} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
