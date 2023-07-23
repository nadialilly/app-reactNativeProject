import React from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import threegirls from '../assets/images/threegirls.jpg';
import { Avatar } from "react-native-paper";
import FlatButton from "../components/button";




const ProfilePage = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.topcontainer}>
                <Text style={styles.profileText}>Profile</Text>
                <View style={styles.avatar}>
                    <Avatar.Image source={threegirls} size={100} />
                </View>
            </View>
            
            <View style={styles.midcontainer}>
                <Text style={styles.name}>Nadia Chester</Text>
              
               <View style={styles.list}>
                   <FlatButton 
                        text='About Me'
                        onPress={() => navigation.navigate('About Me')}
                    />
                     <FlatButton 
                        text='Meet Scores'
                        onPress={() => navigation.navigate('Meet Scores')}
                    />
                     <FlatButton 
                        text='Skills Page'
                        onPress={() => Alert.alert('skills page pressed')}
                    />
                     <FlatButton 
                        text='Gallery'
                        onPress={() => Alert.alert('gallery pressed')}
                    />
                  
                 </View> 
            </View>
             
        </View>
    );

    

    };   
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            flexDirection: 'column',
            backgroundColor: 'off-white'
        },
        topcontainer: {
            marginTop: 10,
            backgroundColor: 'lightgreen',
            borderRadius: 35,
            height: 200,
            position: 'relative'
        
        },
        profileText: {
            color: 'white',
            fontSize: 24,
            marginTop: 30,
            marginLeft: 20,
        },
        midcontainer: {
            height: 100,
            flexDirection: 'column',
            borderRadius: 25
        
        },
        name: {
            justifyContent: 'center',
            fontSize: 24,
            marginTop: 50,
            alignItems: 'center',
            marginLeft: 100,
    
        },
        avatar: {
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 150
        },
        list: {
            rowGap: 20,
            marginTop: 30,
    
           }
    });

export default ProfilePage;