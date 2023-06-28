import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title_item: {
        alignItems: 'flex-start',
    },
    title_text: {
        fontFamily: 'Open Sans',
    },
    home_view: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    heading_row: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_text: {
        fontSize: 30,
        fontFamily: 'Open Sans',
        paddingRight: 10
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
        width: windowWidth,
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
        width: windowWidth
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