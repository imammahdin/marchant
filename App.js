/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}>{
  render(){
    return(
      <View style={Styles.container}>
        <Text style={{color:'#ffffff',fontSize:18}}>Hi There</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor: '#455a64',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});