import moment from "moment";
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Allow only one decimal point in amount input fields
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

// Convert Date to long text. eg - 5 minutes ago
export const dateConvertor = date => {
    const formattedDate = moment(date).fromNow();
    return formattedDate;
}

// Parse long text into 20 characters followed by ...
export const renderDescription = desc => {
    const formattedDesc = desc.length > 20 ? desc.substring(0, 20) + '...' : desc;
    return formattedDesc;
}

// Ah, yes MMKV
export const mmkv = {
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