import React, {useState,useEffect} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
  import { createStackNavigator } from "@react-navigation/stack";
  import { NavigationContainer } from "@react-navigation/native";

  import Homepage from "./screens/Homepage/index.js";
  import WallpaperHome from "./screens/WallpaperHome/index.js";
  import ViewImage from "./screens/ViewImage/index.js";

  const Stack=createStackNavigator();
  const config = {
      animation:'spring',
      config:{
          stiffness:1000,
          damping:500,
          mass:3,
          overshootClamping:true,
          restDisplacementThreshold:0.01,
          restSpeedThreshhold:0.01,
      },
  };

  const Nav=()=>{
    const [getData,setData]=useState('');
    useEffect(()=>{
        console.log('inside nav page');
    },[getData]);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"WallpaperHome"} screenOptions={{headerShown:false}}>
            <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{
                transitionSpec:{
                    open:config,
                    close:config
                }
            }}
            />
             <Stack.Screen
            name="WallpaperHome"
            component={WallpaperHome}
            options={{
                transitionSpec:{
                    open:config,
                    close:config
                }
            }}
            />
             <Stack.Screen
            name="ViewImage"
            component={ViewImage}
            options={{
                transitionSpec:{
                    open:config,
                    close:config
                }
            }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
  }
  export default Nav;
