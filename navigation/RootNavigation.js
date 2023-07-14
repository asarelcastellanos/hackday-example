import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CameraScreen from "../screens/CameraScreen"
import MapScreen from "../screens/MapScreen"
import PictureScreen from "../screens/PictureScreen"

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Picture" component={PictureScreen}/>
                <Tab.Screen name="Camera" component={CameraScreen}/>
                <Tab.Screen name="Map" component={MapScreen}/>    
            </Tab.Navigator>
        </NavigationContainer>
    )
}