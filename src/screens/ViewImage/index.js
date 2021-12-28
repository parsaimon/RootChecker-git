import React, { useState, useEffect, Fragment } from "react";
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
  ActivityIndicator,
  Alert,
  ToastAndroid,
  FlatList,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import Heading from "../../components/Heading";
import ImageView from "react-native-image-viewing";

const ViewImage = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [list, setList] = useState([]);
  useEffect(() => {
    //alert(JSON.stringify(data));
    var temp = {
      uri: data.download_url,
    };
    var arr = [];
    arr.push(temp);
    setList(arr);
  }, [route.params]);

  return (
    <Fragment>
      <View style={{ height: responsiveHeight(6), backgroundColor: "#000" }}>
        <StatusBar
          translucent={true}
          backgroundColor={"#000"}
          barStyle={"light-content"}
        />
      </View>
      <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
        <ImageView
          images={list}
          imageIndex={0}
          visible={true}
          swipeToCloseEnabled={false}
          onRequestClose={() => navigation.goBack()}
        />
      </SafeAreaView>
    </Fragment>
  );
};
export default ViewImage;
