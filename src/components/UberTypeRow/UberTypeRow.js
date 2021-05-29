import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function UberTypeRow(props) {
    const { type } = props

    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg')
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg')
        }
        if (type.type === 'UberXL') {
            return require('../../assets/images/UberXL.jpeg')
        }
    }

    return (
        <View style={styles.container}>
            <Image source={getImage()} style={styles.image} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>{type.type}
                    <IoniconsIcon name={"person"} size={17} color="black" />
                3
                </Text>
                <Text style={styles.time}>
                    8:03 PM drop off
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <IoniconsIcon name={"pricetag"} size={18} color="#42d742" />
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    image: {
        width: 70,
        height: 60,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 16,
        // marginBottom: 5
    },
    time: {
        color: '#5d5d5d',
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
    },
})
