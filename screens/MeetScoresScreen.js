import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";



const MeetScoresScreen = ({navigation}) => {

    const [values, setValues] = useState({vault: '', bars: '', beam: '', floor: '', AA: ''});
   
    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={styles.name}>SIMONE PASQUALE</Text>
            <View style={styles.inputContainer}>
                <Text>Today's Scores</Text>
                <View style={styles.vault}>
                    <Text>Vault</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => handleChange('vault', text)}
                        value={values.vault}
                    />
                </View>
                <View style={styles.vault}>
                    <Text>Bars</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => handleChange('bars', text)}
                        value={values.bars}
                    />
                </View>
                <View style={styles.vault}>
                    <Text>Beam</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => handleChange('beam', text)}
                        value={values.beam}
                    />
                </View>
                <View style={styles.vault}>
                    <Text>Floor</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => handleChange('floor', text)}
                        value={values.floor}
                    />
                </View>
                <View style={styles.vault}>
                    <Text>AA</Text>
                    <TextInput  
                        style={styles.input}
                        onChangeText={(text) => handleChange('AA', text)}
                        value={values.AA}
                    />
                </View>
              </View>  
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    input: {
        height: 50,
        width: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 3,
        
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
    },
    vault: {
        flexDirection: 'column'
    }
});

export default MeetScoresScreen;