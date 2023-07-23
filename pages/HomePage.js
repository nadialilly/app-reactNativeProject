import { View, Text, Image, StyleSheet } from "react-native";
import threegirls from '../assets/images/threegirls.jpg';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name= 'Home'
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                    />
                <Stack.Screen 
                    name= 'Profile'
                    component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
const HomePage = () => {

    return(
        <View styles={styles.container}>
            <Image source={threegirls} style={styles.image} />
            <Text style={styles.text}>Gymnastics Life</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
       
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4
    },
    text: {
        color: 'white',
        fontSize: 42,
        textAlign: 'center'
    }
});

export default HomePage;