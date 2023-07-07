import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    home_view: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
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
    list_view: {
        flex: 1,
        width: width,
        paddingHorizontal: 15
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
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width
    },
    placeholder_text: {
        padding: 20,
        fontSize: 15,
        fontFamily: 'Open Sans',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    singleItemStyle: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    firstItemStyle: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    lastItemStyle: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    }
});

export function itemStyle(id, listData) {
    if (listData.length == 1) {
        return { ...styles.singleItemStyle }
    } else if (id == listData.length) {
        return { ...styles.lastItemStyle }
    } else if (id == 1) {
        return { ...styles.firstItemStyle }
    } else if (id > 1 && id < listData.length) {
        return true
    }
}