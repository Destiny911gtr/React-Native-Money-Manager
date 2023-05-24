import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    info_grid: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        flexDirection: 'row'
    },
    limit_box1: {
        flex: 1,
        height: 190,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    limit_box2: {
        flex: 1,
        height: 200
    },
    lebel_style: {
        fontSize: 15,
        fontFamily: 'Open Sans',
    },
    value_style: {
        fontSize: 30,
        fontFamily: 'Open Sans',
    },
    exp_box: {
        flex: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bal_box: {
        flex: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});