import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import  Icon from 'react-native-vector-icons/Entypo';

const StackNav=()=>{
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return(
        <Stack.Navigator 
                screenOptions={{
                    statusBarColor: "#0163d2",
                    headerStyle:{
                    backgroundColor: "#0163d2",
                    },
                    headerTintColor: "#fff",
                    headerTitleAlign: "center",
                    headerLeft: () => {
                        return(
                            <Icon
                            name="menu"
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            size={30}
                            color="#fff"
                            />
                        );
                    }
                }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen}/>
                <Stack.Screen 
                    name='User' 
                    component={UserScreen} 
                    options={{
                        headerShown: true,
                    }}/>
            </Stack.Navigator>
    )
}

const DrawerNav=()=>{
    const Drawer=createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name='Home' component={StackNav}/>
        </Drawer.Navigator>
    )
}

function App(){
    return (
        <NavigationContainer>
            <DrawerNav/>
        </NavigationContainer>
    );
}

export default App;