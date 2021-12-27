/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Nav from './src/Nav';

const App = () => {
  const [getData, setData] = useState('');
  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, [getData]);

  if (isSplash) {
    return <Splash />;
  } else {
    return (
     <Nav/>
    );
  }
};
const Splash = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: responsiveFontSize(4.8), fontWeight: 'bold',color:"#808080"}}>
        Root Checker
      </Text>
    </View>
  );
};
export default App;
