import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
export default function DisplayWord({ navigation }) {

  const [anscheck, setAnscheck] = useState("incorrect");
  const [meaning, setMeaning] = useState("");
  const [current, setCurrent] = useState(1000);
  const [show, setShow] = useState(true)
  const [list, setList] = useState([])
  const [ansStyle, setAnsStyle] = useState(true)

  const param = navigation.getParam('levelProp') * 1000;

  useEffect(() => {
    setCurrent(param);
    axios.get('https://vocabapp-backend.herokuapp.com/wordsCount/' + param).then(function (resp) {
      setList(resp.data);
    }).catch((e) => { console.log(e) })

  }, [])

  const goNext = () => {

    if (current === (list.length + param - 1)) {
      navigation.navigate("Levels")
    }
    setAnscheck("incorrect")
    setCurrent(current + 1)
    setShow(true)
  }

  const touch = (ans) => {
    console.log(ans)
    if (ans == meaning) {
      setAnscheck("Correct")
    }
    setShow(false)
  }

  const Shuffle = (obj) => {

    let arr = []
    setMeaning(obj.obj.mean)
    arr.push(obj.obj.option1, obj.obj.mean, obj.obj.option2, obj.obj.option3);
    var i,
      j,
      temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return (arr.map((m) => {
      return (

        <TouchableOpacity style={styles.options} onPress={() => { touch(m) }} >
          <Text style={styles.option}>{m}</Text>
        </TouchableOpacity>)
    }))

  }



  return (
    <View style={globalStyles.container}>


      <View style={styles.head}>
        <Icon.Button
          name="school-outline"
          backgroundColor="#5f9ea0"
          color="#000"
        >
        </Icon.Button>

        <Text style={styles.headerText}> Level {navigation.getParam('levelProp')}</Text>

      </View>

      {
        list.map((a) => {
          return (

            <View style={styles.hideOptions}>
              {a.key === current ?
                <View style={styles.display}>

                  {show ?
                    <View>
                      <Text style={styles.optionWord}> {a.word}</Text>
                      <Shuffle obj={a} />
                    </View >
                    :
                    <View>
                      <Text style={[styles.anstyling, anscheck === "Correct" ? { backgroundColor: "lightgreen" } : { backgroundColor: "tomato" }]}>{anscheck}</Text>
                      <Text style={styles.optionWord}> {a.word}</Text>
                      <Text style={styles.options}> Meaning {a.mean}</Text>
                      <Text style={styles.options}>Explanation {a.exp}</Text>
                      <Button title="Next" onPress={goNext}></Button>
                    </View>
                  }
                </View>
                : <Text></Text>
              }



            </View>
          )
        })
      }
    </View>
  );
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
  },
  hideOptions: {
    width: win.width,
    position: 'absolute',
    top: 65,
    zIndex: 100
  },
  anstyling: {
    width: win.width - 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    padding: 25,
    fontSize: 20,
    alignItems: 'center'
  },
  head: {


    // elevation: 4,
    // borderBottomColor: "#a7a7aa",
    // shadowColor: "#a7a7aa",
    // top: 15,
    marginTop: 15,
    // height: 72.6,
    // width: win.width,
    alignItems: 'center',
    flexDirection: 'row',
    // marginBottom: 5,
    // backgroundColor: 'white',
    // borderBottomWidth: 2
  },
  headerText: {
    color: 'black',
    fontSize: 25,
  }
});
