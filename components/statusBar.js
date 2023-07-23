import React from "react";
import { useState } from "react";
import {Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const StatusBar = () => {

    return(
        <SafeAreaView style={StyleSheet.container}>
            <StatusBar
                animated={true}
                backgroundColor= 'black'
                barStyle={statusBarStyle}
            />
        </SafeAreaView>
    )
}