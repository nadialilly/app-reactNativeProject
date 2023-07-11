import { View, Text, ImageBackground, StyleSheet } from "react-native";
import threegirls from '../assets/images/threegirls.jpg';

const HomePage = () => {

    return(
        <View styles={styles.container}>
            <ImageBackground source={threegirls} resizeMode="cover" style={styles.image} >
            <Text style={styles.text}>Gymnastics Life</Text>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 800,
        width: 400
    },
    text: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center'
    }
});

export default HomePage;