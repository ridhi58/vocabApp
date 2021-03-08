import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Header } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Landingpage({ navigation }) {


    return (

        <View style={globalStyles.container}>
            <View style={styles.cont}>
                <Text style={styles.text}>Vocab Mad Easy</Text>
                <Text style={styles.text1}>Vocabulary Builder</Text>
                <View style={styles.landButton}>
                    <Button title="Get Started" onPress={() => { navigation.navigate('AllLevels') }} />
                </View>
                {console.log("Get Started")}
                <View style={styles.sign}>
                    <Button title="Sign In" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {

        alignItems: 'center',
        marginTop: 250

    },
    text: {

        fontSize: 40,
        fontWeight: 'bold',
        color: "black",


    },
    text1: {

        fontSize: 25,
        color: "grey",
        marginBottom: 20

    },

    landButton: {

    },
    sign: {
        marginTop: 250
    }
});
