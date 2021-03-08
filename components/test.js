import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import axios from 'axios'

export default function Test() {

    useEffect(() => {

        console.log("hit1")
         axios.get('https://vocabapp-backend.herokuapp.com/words').then((resp)=>{console.log(resp.data)})
    },[])

    return (
        <View>
        <Text>
            hello
             
        </Text>
        <Button title = "test" ></Button>
        </View>
    )
}