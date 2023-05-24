import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const enterAmount = amount => {
    const cleanedText = amount.replace(/[^0-9.]/g, '');
    const hasMultipleDots = cleanedText.split('.').length > 2;
    if (hasMultipleDots) {
        const split = cleanedText.split('.')
        const returnAmount = split[0] + '.' + split[1];
        return returnAmount;
    } else {
        return cleanedText;
    }
}

export const dateConvertor = date => {
    const formattedDate = moment(date).fromNow();
    return formattedDate;
}

export const renderDescription = desc => {
    const formattedDesc = desc.length > 20 ? desc.substring(0, 20) + '...' : desc;
    return formattedDesc;
}

export const storeData = (key, value) => {
    const storeValue = async () => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.error(e);
        }
    }
    storeValue();
}

export const getData = async (key) => {
    return await AsyncStorage.getItem(key);
}