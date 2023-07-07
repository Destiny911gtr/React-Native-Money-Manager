import { Dimensions, StyleSheet } from 'react-native';
import {StatusBar} from 'react-native';

const { height, width } = Dimensions.get("window");
const headerHeight = 350;

export const styles = StyleSheet.create({
    container: {
        height: headerHeight + 70,
    },
    dashboard: {
        width: width,
        height: headerHeight,
    },
    animation: {
        flex: 1,
        height: 200,
        width: 200,
        marginBottom: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    header_text: {
        fontSize: 15,
        fontFamily: 'Open Sans',
    },
    info_row: {
        top: headerHeight - 50,
        left: 25,
        width: width - 50,
        borderRadius: 60,
        paddingHorizontal: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        position: 'absolute',
    },
    label_style: {
        fontSize: 15,
        fontFamily: 'Open Sans',
        textAlign: 'center',
    },
    value_style: {
        fontSize: 20,
        fontFamily: 'Open Sans',
        textAlign: 'center',
    },
    heading_row: {
        marginTop: 10 + StatusBar.currentHeight,
        marginLeft: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_text: {
        fontSize: 30,
        fontFamily: 'Open Sans',
        paddingRight: 10
    },
    limit_box: {
        flex: 1,
        height: 80,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    exp_box: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bal_box: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});