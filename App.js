import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { globalStyles } from "./styles/global"
import Navigator from './routes/homeStack'
import { Route, Switch, NativeRouter } from 'react-router-native'
import Levels from './components/Levels'

export default function App() {


  return (
    <View style={globalStyles.container}>

      <Navigator />
      <NativeRouter>
        <Switch>
          <Route exact path="/LevelsRoute" component={Levels} />
        </Switch>
      </NativeRouter>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
