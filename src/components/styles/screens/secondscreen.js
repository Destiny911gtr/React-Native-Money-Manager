import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_style: {
        height: 300,
        minWidth: 280,
        maxWidth: 560,
        marginHorizontal: 50,
        padding: 24,
        borderRadius: 28,
    },
    modal_text_title: {
        marginVertical: 8
    },
    modal_text_desc: {
        marginVertical: 8
    },
    modal_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_input: {
        marginVertical: 8,
        width: windowWidth - 160,
        maxWidth: 536
    },
    button_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    list_view: {
        flex: 1,
        paddingHorizontal: 15,
        width: windowWidth
    },
    list_item: {
        borderRadius: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    singleItemStyle: {
        marginVertical: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    }
})