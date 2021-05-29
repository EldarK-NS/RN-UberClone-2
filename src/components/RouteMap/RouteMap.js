import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
// import { useRoute } from '@react-navigation/native';


export default function RouteMap({ origin, destination }) {

    // const route = useRoute()
    // console.log(route.params)

    const GOOGLE_MAPS_APIKEY = 'AIzaSyA2nVOa4MGgQhRUbgZfT6s3FTH1VSlBMYY'

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }
    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }
   
   
    return (

        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 51.1605227,
                longitude: 71.4703558,
                latitudeDelta: 0.28479920301184336,
                longitudeDelta: 0.1714510252245211,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
            />
            <Marker
                // key={index}
                coordinate={originLoc}
                title={'origin'}
            // description={marker.description}
            />
            <Marker
                // key={index}
                coordinate={destinationLoc}
                title={'destination'}
            // description={marker.description}
            />

        </MapView>
    )
}

const styles = StyleSheet.create({
    imageMarker: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
})
