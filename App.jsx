import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';

import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
            screenOptions={{
                statusBarColor: "red",

                headerStyle:{
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
            }}>
                <Stack.Screen name='Home' 
                component={HomeScreen} 
                options={{
                }}/>
                <Stack.Screen name='Profile' component={ProfileScreen}/>
                <Stack.Screen name='User' component={UserScreen} options={{
                    headerShown: true,
                    headerBackVisible: false,
                    headerLeft:() => {
                        return(
                            <Text>HI</Text>
                        )
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;