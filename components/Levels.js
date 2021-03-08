import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


export default function Levels({ navigation }) {

    const [levelsList, setLevelsList] = useState([])

    useEffect(() => {
        var myList = []
        for (var i = 1; i < 9; i++) {
            myList.push({ key: i });
        }
        setLevelsList(myList)
    }, [])


    return (
        <View style={globalStyles.container}>
            <ScrollView>

                <View style={styles.allLevel}>

                    {levelsList.map((l) => {
                        return (
                            <TouchableOpacity style={styles.column} onPress={() => { navigation.navigate('DisplayWord', { levelProp: l.key }) }}>
                                <Text style={styles.LevelText} > {navigation.getParam('name')} Level {l.key} </Text>
                            </TouchableOpacity>
                        )
                    })}



                </View>
            </ScrollView>


        </View>
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
        height: 100,
        backgroundColor: '#fff',
        // backgroundColor: "#d4af37",
        borderRadius: 10,
        marginBottom: 20,
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    LevelText: {
        fontSize: 22
    }


});