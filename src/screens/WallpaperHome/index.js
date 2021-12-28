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

const WallpaperHome = () => {
  const [getData, setData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(3);
  const [list, setList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      console.log("inside WallpaperHome");
      getWallpapers(1);
      //setPageNum(1);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [getData]);

  async function getWallpapers(pn) {
    var temp=list;
    var arr=[];
    await axios
      .get("https://picsum.photos/v2/list?page=" + pn + "&limit=" + limit, {
        timeout: 10000,
      })
      .then(function (response) {
        console.log("wallpaper", response.data);
        //Toast.showWithGravity("Data fetched successfully!",Toast.SHORT,Toast.BOTTOM);
        //setList(response.data);
        arr=response.data;
        if(temp.length>0){
          temp.map(function(item){
            arr.push(item)
          });
        }
        setList(arr);

      })
      .catch(function (error) {
        console.log(error);
        Toast.showWithGravity(
          "Unable to fetch data",
          Toast.SHORT,
          Toast.BOTTOM
        );
      });
  }

  useEffect(() => {
    //alert(JSON.stringify(list));
    getWallpapers(pageNum);
    //alert(pageNum)
  }, [pageNum]);

  return (
    <Fragment>
      <View style={{ height: responsiveHeight(6), backgroundColor: "#fff" }}>
        <StatusBar
          translucent={true}
          backgroundColor={"#fff"}
          barStyle={"dark-content"}
        />
      </View>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <Heading pageName={"Wallpapers"} buttonType={"none"} />
        {list.length > 0 ? (
          <FlatList
            onScrollEndDrag={() => {
              setPageNum(pageNum + 1);
            }}
            data={list}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: responsiveHeight(38),
                    width: "98%",
                    backgroundColor: "#808080",
                    borderRadius: responsiveWidth(3),
                    marginBottom: responsiveWidth(2),
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ActivityIndicator
                      size={"large"}
                      color={"#fff"}
                      style={{ alignSelf: "center" }}
                    />
                    {/* <Text>{item.author}</Text> */}
                  </View>
                  <Image
                    source={{ uri: item.download_url }}
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      borderRadius: responsiveWidth(3),
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <TouchableOpacity
            onPress={() => {
              getWallpapers(1);
            }}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: responsiveWidth(5),
              borderRadius: responsiveWidth(8),
              backgroundColor: "#000",
              width: responsiveWidth(50),
              marginTop: responsiveHeight(40),
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: responsiveFontSize(2),
                fontWeight: "bold",
              }}
            >
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default WallpaperHome;
