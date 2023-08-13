import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { Animated, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";

import lottieWallet from "../../assets/lottie/wallet.json";
import { styles } from "../../styles/screens/splashscreen";
import { setRedux } from "../../actions/homeScreenActions";

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [scaleValue] = useState(new Animated.Value(1));

    const startAnimation = () => {
        Animated.timing(scaleValue, {
            toValue: 5, // Target scale value
            duration: 500, // Duration of the animation in milliseconds
            useNativeDriver: true, // Optimize performance using native driver
        }).start();

        const interval = setInterval(() => {
            clearInterval(interval);
            navigation.navigate('TabNavigaton');
            dispatch(setRedux(false, "FIRST_LAUNCH"));
        }, 500)
    };

    return (
        <View style={{ ...styles.screen, backgroundColor: theme.colors.background }}>
            <Animated.View style={{ ...styles.lottieView, backgroundColor: theme.colors.primary, transform: [{ scale: scaleValue }] }} />
            <LottieView
                style={styles.animation}
                source={lottieWallet}
                autoPlay
                loop={false}
                onAnimationFinish={startAnimation}
            />
        </View>
    );
}

export default SplashScreen;