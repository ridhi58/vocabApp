import React from "react"
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/global'

export default function AllLevels({ navigation }) {

    return (

        <View style={globalStyles.container} >



            <View style={styles.allLevel}>
                <TouchableOpacity style={styles.column} onPress={() => { navigation.navigate('Levels', { name: "Basic" }) }}>
                    <Text style={styles.textC}>Basic</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.column} onPress={() => { navigation.navigate('Basic') }}>
                    <Text style={styles.textC}>Medium</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.column} onPress={() => { navigation.navigate('Basic') }}>
                    <Text style={styles.textC}>Advanced</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>


            </View>

        </View >

    )
}


const styles = StyleSheet.create({

    allLevel: {
        flex: 1,
        backgroundColor: '#5f9ea0',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        padding: 10
    },
    column: {
        height: 200,
        backgroundColor: '#fff',
        // backgroundColor: "#d4af37",
        borderRadius: 30,
        marginBottom: 20,
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'




    },
    textC: {
        // alignSelf: 'center',
        fontSize: 30,
        borderBottomWidth: 1
    },

    textN: {
        fontSize: 20,


    }

});