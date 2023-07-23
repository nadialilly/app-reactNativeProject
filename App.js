
import { StyleSheet, View } from 'react-native';
//import HomePage from './pages/HomePage';
import AboutMeScreen from './screens/AboutMeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './screens/profileScreen';
import MyStack from './components/mainComponent';

export default function App() {
  return (
   
    <NavigationContainer>
      <MyStack/>
   </NavigationContainer>
   
    
  );
}


