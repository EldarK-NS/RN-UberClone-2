import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CovidMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci inventore similique reprehenderit temporibus ?
            </Text>
            <Text style={styles.link}>Learn more </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b80ff',
        padding: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    title: {
        color: 'white',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5
    },
    text: {
        color: '#fff',
        fontSize:13,
        marginBottom:5
    },
    link: {
        color: '#fff',
        fontSize:15,
        fontWeight:'bold',
    },

})
