import React,{useState,useEffect} from "react";
import { useNavigation,DrawerActions } from "@react-navigation/native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
  } from 'react-native';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";

const Heading=({pageName,buttonType})=>{

    const navigation=useNavigation();
    const menuIcon=require("../assets/menu.png");
    const backIcon=require("../assets/back.png");
    return(
        <View style={{width:responsiveWidth(100),aspectRatio:6.5,flexDirection:'row',paddingHorizontal:responsiveWidth(3)}}>
            {buttonType == 'none'?
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}></View>
               : <TouchableOpacity onPress={()=>{buttonType == 'menu' ? navigation.dispatch(DrawerActions.openDrawer()) : navigation.goBack()}} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={buttonType =='menu' ? menuIcon : backIcon} />
                </TouchableOpacity>
            }
            <View style={{flex:6,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:responsiveFontSize(3),color:"#808080"}}>{pageName}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}></View>
        </View>
    )

}
export default Heading;