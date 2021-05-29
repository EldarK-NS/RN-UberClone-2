import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import UberTypes from './../UberTypes/UberTypes';
import RouteMap from './../RouteMap/RouteMap';

import { useRoute } from '@react-navigation/native'

export default function SearchResults(props) {
    const route = useRoute()
    const { originPlace, destinationPlace } = route.params

    console.log(route.params)
    return (
        <View style={styles.container}>
            <View style={styles.map}>

                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            <View style={styles.type}>
                <UberTypes />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    map: {
        height: Dimensions.get('window').height * 0.45
    },
    // type: {
    //     height: 400
    // },

})
