import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function PlaceRow({ data }) {
    // console.log(data)
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {
                    data.description === 'Home' ?
                        (<EntypoIcon name={"home"} size={20} color="#fff" />) :
                        (<EntypoIcon name={"location-pin"} size={20} color="#fff" />)
                }

            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,

    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15
    },
    locationText: {

    },
})
