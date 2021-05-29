import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import CovidMessage from '../../components/CovidMessage/CovidMessage'
import HomeMap from '../../components/HomeMap/HomeMap'
import HomeSearch from './../../components/HomeSearchComponent.js/HomeSearch';

export default function HomeScreen(props) {
    return (
        <View>
            <View style={styles.map}>
                <HomeMap />
            </View>
            {/* <CovidMessage /> */}
            <HomeSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height * 0.6
    },
})
