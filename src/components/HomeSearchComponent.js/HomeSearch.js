import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'


export default function HomeSearch(props) {
    const navigation = useNavigation()

    const goToSearch = () => {
       navigation.navigate('DestinationSearch')  
    }

    return (
        <View>
            <Pressable onPress={goToSearch}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Where To?</Text>
                    <View style={styles.timeContainer}>
                        <AntDesignIcon name="clockcircle" size={18} color="#535353" />
                        <Text>Now</Text>
                        <MaterialIconsIcon name="keyboard-arrow-down" size={18} color="#535353" />
                    </View>
                    {/* <TextInput /> */}
                </View>
            </Pressable>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesignIcon name="clockcircle" size={22} color="#fff" />
                </View>
                <Text style={styles.destinationText}> Spin Nightclub</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainerHome}>
                    <EntypoIcon name="home" size={22} color="#fff" />
                </View>
                <Text style={styles.destinationText}> Spin Nightclub</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#b3b3b3',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25

    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16
    },
    iconContainerHome: {
        backgroundColor: '#218cff',
        padding: 10,
        borderRadius: 25
    }
})
