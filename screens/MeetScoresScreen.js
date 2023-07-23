import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputBox from "../components/inputBox";
import ScoreTable from "../components/table";



const MeetScoresScreen = ({navigation}) => {

 return(
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={styles.name}>SIMONE PASQUALE</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Today's Scores</Text>
                <View style={styles.vault}>
                    <Text>Vault</Text>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <Text>Bars</Text>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <Text>Beam</Text>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <Text>Floor</Text>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <Text>AA</Text>
                    <InputBox />
                </View>
              </View>  
              <View style={styles.inputContainer}>
                <Text style={styles.labelTwo}>Place</Text>
                <View style={styles.vault}>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <InputBox />
                </View>
                <View style={styles.vault}>
                    <InputBox />
                </View>
              </View>  
              <View>
                <ScoreTable />
              </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      label:{
        alignSelf: 'center',
        
      },
      labelTwo: {
        alignSelf: 'center',
        marginLeft: 65
      },
    name: {
        color: 'gold',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20
    },
    vault: {
        flexDirection: 'column'
    }
});

export default MeetScoresScreen;