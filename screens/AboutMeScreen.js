

import { Text, StyleSheet, ScrollView } from "react-native";
import { Card } from 'react-native-paper';
import threegirls from '../assets/images/threegirls.jpg';


const AboutMeScreen = ({navigation}) => {
   


    return(
        <ScrollView style={styles.scroll}>
            <Card style={styles.container}>
                <Card.Content>
                    <Text style={styles.name}>SIMONE PASQUALE</Text>
                </Card.Content>
                <Card.Cover source={threegirls} />
                <Card.Content style={styles.info}>
                    <Text>Age: 12</Text>
                    <Text>Grade: 7th</Text>
                    <Text>Level: Platinum</Text>
                </Card.Content>

            </Card>

            <Card style={styles.summary}>
                <Card.Content>
                    <Text style={styles.mystory}>My Story...</Text>
                    <Text>
                        I have been doing Gymnastics since before I could walk. I went to a preschool based gymnastics which is where
                        I started to fall in love with the sport. I am now a Platinum level gymnasts. I go once a year an attend Flip Fest
                        where I train for a week with olympic gymnasts. My mom has a been my coach for a long time. However I just started a new gym
                        and have a new head coach. I hope to do this sport for as long as I can and go as far as I can.
                    </Text>
                </Card.Content>

            </Card>
      </ScrollView>  
    )
    };   

    const styles = StyleSheet.create({
        container: {
            paddingVertical: 20,
            alignContent: 'center',
            margin: 30,

        },
        name: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            paddingBottom: 10
        },
        info: {
            rowGap: 10,
            marginTop: 5,
        },
        summary: {
            borderRadius: 25,
            padding: 20,
            fontStyle: 'italic'
        },
        mystory: {
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 10

        },
        scroll: {
            backgroundColor: 'aqua'
        }
    });

export default AboutMeScreen;