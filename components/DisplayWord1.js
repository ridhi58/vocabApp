import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';



export default function DisplayWord1({ navigation }) {

    const myParam = navigation.getParam('levelProp')
    const myParam1 = navigation.getParam('levelProp1')


    const [wordObj, setWordObj] = useState({})
    const [show, setShow] = useState(true)

    useEffect(() => {

        axios.get('https://vocabapp-backend.herokuapp.com/words/' + myParam).then(function (resp) {

            setWordObj(resp.data)
        })
            .catch((e) => { console.log("error2") })
    }, [])


    const touch = () => {

        setShow(false)
    }

    const goNext = () => {


        navigation.navigate('DisplayWord1', { levelProp: myParam + 1 })
        setShow(true)


    }



    return (
        <View style={globalStyles.container}>


            <View style={globalStyles.head}>
                <Icon.Button
                    name="menu-sharp"
                    backgroundColor="white"
                    color="#000"
                    onPress={() => { navigation.navigate('Levels') }}>
                </Icon.Button>

                <Text style={globalStyles.headerText}> Level {myParam1}</Text>

            </View>

            <View>
                <View style={styles.display}>
                    <Text style={styles.optionWord}> {wordObj.word}</Text>
                    {show ?
                        <View>
                            <TouchableOpacity onPress={touch}><Text style={styles.options}>{wordObj.option1}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={touch}><Text style={styles.options}>{wordObj.option2}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={touch}><Text style={styles.options}>{wordObj.option3}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={touch}><Text style={styles.options}>{wordObj.mean}</Text></TouchableOpacity>
                        </View>
                        :
                        <View>
                            <Text style={styles.options}> Meaning {wordObj.mean}</Text>
                            <Text style={styles.options}>Explanation {wordObj.exp}</Text>
                            <Button title="Next" onPress={goNext} ></Button>
                        </View>
                    }
                </View>
            </View>

        </View>



    )
}

const styles = StyleSheet.create({
    display: {
        margin: 10,
        backgroundColor: "white",

    },
    options: {
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        padding: 25,
        fontSize: 20
    },
    option: {
        fontSize: 20
    },
    optionWord: {
        alignSelf: 'center',
        padding: 25,
        fontWeight: 'bold',
        fontSize: 30
    }

});