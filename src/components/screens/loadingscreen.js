import React from "react";
import { View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

import { styles } from "../styles/screens/loadingscreen";

const LoadingScreen = () => {
    const theme = useTheme();

    return (
        <View style={{...styles.screen, backgroundColor: theme.colors.background}}>
            <ActivityIndicator animating={true} color={theme.colors.primary} />
        </View>
    );
}

export default LoadingScreen;