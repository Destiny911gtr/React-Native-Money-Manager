import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottieView: {
        width: width * 0.5,
        height: width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingBottom: 40
    },
    animation: {
        position: 'absolute',
        width: 150,
        bottom: height * 0.2 + 10
    }
});