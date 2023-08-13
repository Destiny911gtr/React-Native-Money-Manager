import moment from "moment";
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

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

export const reduxStorage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};