import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useFlipper } from '@react-navigation/devtools';

import SplashScreen from '../components/screens/splashscreen';
import TabNavigaton from './tab-navigaton';

const Stack = createStackNavigator();

export default StackNavigation = () => {
    const firstLaunch = useSelector(state => state.firstLaunch);
    const navigationRef = useNavigationContainerRef();

    const initRoute = () => {
        return firstLaunch ? "SplashScreen" : "TabNavigaton";
    }

    if (__DEV__) {
        useFlipper(navigationRef);
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={initRoute()}
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                })}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="TabNavigaton"
                    component={TabNavigaton}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}