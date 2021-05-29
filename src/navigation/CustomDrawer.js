import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import { Auth } from 'aws-amplify'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <View style={styles.userRow}>
                    <View style={styles.userProfile} />
                    <View>
                        <Text style={styles.userName}>User User</Text>
                        <Text style={styles.userStars}>5.00 *</Text>
                    </View>
                </View>

                <View style={styles.messages}>
                    <Pressable onPress={() => { }}>
                        <Text style={styles.textMessages}>Messages</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => { }}>
                    <Text style={styles.makeMore}>Do more with your account</Text>
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Text style={styles.makeMoney}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
            <Pressable onPress={() => { Auth.signOut() }}>
                <Text style={{ padding: 5, color: 'black', paddingLeft: 20 }}>Log Out </Text>
            </Pressable>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        padding: 15,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    userProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#cacaca',
        marginRight: 10,
    },
    userName: {
        color: 'white',
        fontSize: 18
    },
    userStars: {
        color: 'lightgrey',
        fontSize: 15
    },
    messages: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#919191',
        borderTopColor: '#919191',
        marginVertical: 10
    },
    textMessages: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 18
    },
    makeMore: {
        color: 'lightgrey',
        paddingVertical: 8,
        fontSize: 15
    },
    makeMoney: {
        color: 'white',
        paddingVertical: 8,
        fontSize: 15
    },
})
