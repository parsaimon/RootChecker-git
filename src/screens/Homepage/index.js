import React, {useState, useEffect,Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Platform,
  ActivityIndicator
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
import JailMonkey from 'jail-monkey';
import Heading from '../../components/Heading';

const Homepage = () => {
  const [getData, setData] = useState('');
  const [getStatus,setStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function checkStatus(){
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
        var res=JailMonkey.isJailBroken();
        setStatus(res);
      },3000);
  }

  useEffect(() => {
    console.log('inside homepage');
  }, [getData]);

  return(
    <Fragment>
        <View style={{height:responsiveHeight(6),backgroundColor:'#fff'}}>
            <StatusBar translucent={true} backgroundColor={"#fff"} barStyle={'dark-content'}/>
        </View>
        <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" automaticallyAdjustContentInsets={false}>
                <Heading pageName={"Root Checker"} buttonType={'none'}/>
                <View style={{height:responsiveHeight(80)}}>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',paddingHorizontal:responsiveWidth(3)}}>
                        {isLoading ?
                        <ActivityIndicator size={"large"} color={"#000"} style={{alignSelf:'center'}}/>
                        :Platform.OS == 'ios'
                        ? <Text style={{fontSize:responsiveFontSize(6),textAlign:'center',textAlignVertical:'center',fontWeight:'bold',color:"#808080"}}>{getStatus ? "Your device is jail broken" : "Your device is not jail broken"}</Text>
                            :<Text style={{fontSize:responsiveFontSize(6),textAlign:'center',textAlignVertical:'center',fontWeight:'bold',color:"#808080"}}>{getStatus ? "Your device is rooted" : "Your device is not rooted"}</Text>
                        }
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{checkStatus()}} style={{justifyContent:'center',alignItems:'center',width:'90%',backgroundColor:'#000',padding:responsiveWidth(2.5),alignSelf:'center',height:responsiveHeight(10)}}>
                            <Text style={{color:"#fff",fontSize:responsiveFontSize(2.4),textAlignVertical:'center',textAlign:'center'}}>{Platform.OS == 'ios' ? "Tap to Check Jail Break Status" : "Tap to Check Device Root Status"}</Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    </Fragment>
  );
}
export default Homepage;