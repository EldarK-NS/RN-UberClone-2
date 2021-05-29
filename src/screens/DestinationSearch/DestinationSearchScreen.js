import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native'

import { key } from './../../../key';

export default function DestinationSearchScreen(props) {
    const navigation = useNavigation()
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    const homePlace = {
        description: 'Home',
        geometry: {
            location: {
                lat: 51.1657460927,
                lng: 71.430287243
            }
        },
    };
    const workPlace = {
        description: 'Work',
        geometry: {
            location: {
                lat: 51.1599149393,
                lng: 71.4060258865
            }
        },
    };


    const query = {
        key: key.API_GOOGLE,
        language: 'en',
    }

    useEffect(() => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace,
            })
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details })
                    }}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    currentLocation={true}
                    isRowScrollable={true}
                    currentLocationLabel='Current Location'
                    styles={{
                        textInput: styles.textInput,
                        autocompliteContainer: styles.autocompliteContainer,
                        separator: styles.separator,
                        listView: styles.listView,
                    }}
                    fetchDetails
                    query={query}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })
                    }}
                    isRowScrollable={true}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    styles={{
                        textInput: styles.textInput,
                        autocompliteContainer: {
                            ...styles.autocompliteContainer,
                            top: 55
                        },
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={query}
                    renderRow={(data) => <PlaceRow data={data} />}
                />
                {/* Left line from-to */}
                <View style={styles.circle}>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.square}>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
        borderRadius: 10
    },
    autocompliteContainer: {
        position: 'absolute',
        top: 55,
        left: 10,
        right: 10
    },
    separator: {
        backgroundColor: '#eee',
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 105
    },
    circle: {
        width: 5,
        height: 5,
        position: 'absolute',
        top: 37,
        left: 15,
        backgroundColor: 'black',
        borderRadius: 5
    },
    line: {
        width: 1,
        height: 50,
        position: 'absolute',
        top: 42,
        left: 17,
        backgroundColor: '#919191',
    },
    square: {
        width: 5,
        height: 5,
        position: 'absolute',
        top: 92,
        left: 15,
        backgroundColor: 'black'
    },
})


