import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
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
});