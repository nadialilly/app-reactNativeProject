import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import HomeScreen from "../screens/AboutMeScreen";
import AboutMeScreen from "../screens/AboutMeScreen";
import ProfilePage from "../screens/profileScreen";
import MeetScoresScreen from "../screens/MeetScoresScreen";

const Stack = createNativeStackNavigator();  

const MyStack = () => {
  

    return(
        
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{backgroundColor: 'aqua'}}
            >
                <Stack.Screen
                    name= 'Home'
                    component={ProfilePage}
                    options={{title: 'Home'}}
                    />
                <Stack.Screen 
                    name= 'About Me'
                    component={AboutMeScreen}
                    options={{title: 'About Me'}}/>
                <Stack.Screen
                    name= 'Meet Scores'
                    component={MeetScoresScreen}
                    option={{title: 'Meet Scores'}}
                />
            </Stack.Navigator>
      
    )

};



export default MyStack;