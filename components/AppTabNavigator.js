import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import BookDonateScreen from '../screens/BookDonateScreen';
import VideoRequestScreen from '../screens/VideoRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  
  VideoRequest: {
    screen: VideoRequestScreen,
    navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Video Request",
    }
  }
});