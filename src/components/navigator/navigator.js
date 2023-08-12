import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Homescreen from '../screens/homescreen';
import Secondscreen from '../screens/secondscreen';


const Tab = createBottomTabNavigator();

export default Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={({ navigation, state, descriptors, insets }) => (
                    <BottomNavigation.Bar
                        shifting={false}
                        compact={true}
                        navigationState={state}
                        safeAreaInsets={insets}
                        onTabPress={({ route, preventDefault }) => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (event.defaultPrevented) {
                                preventDefault();
                            } else {
                                navigation.dispatch({
                                    ...CommonActions.navigate(route.name, route.params),
                                    target: state.key,
                                });
                            }
                        }}
                        renderIcon={({ route, focused, color }) => {
                            const { options } = descriptors[route.key];
                            if (options.tabBarIcon) {
                                return options.tabBarIcon({ focused, color, size: 24 });
                            }

                            return null;
                        }}
                        getLabelText={({ route }) => {
                            const { options } = descriptors[route.key];
                            const label =
                                options.tabBarLabel !== undefined
                                    ? options.tabBarLabel
                                    : options.title !== undefined
                                        ? options.title
                                        : route.title;

                            return label;
                        }}
                    />
                )}>
                <Tab.Screen
                    name="Home"
                    component={Homescreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => {
                            return <Icon name="home" size={size} color={color} />;
                        },
                    }}
                />
                <Tab.Screen
                    name="Second"
                    component={Secondscreen}
                    options={{
                        tabBarLabel: 'Expenses',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Icon name="cash-multiple" size={size} color={color} />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
