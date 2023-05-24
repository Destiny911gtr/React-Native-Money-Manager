import { useState } from "react";
import { View } from "react-native";
import { Button, Modal, Text, TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../../styles/dialogs/doubleEntryDialog';
import { enterAmount } from '../../utils/helperFuntions';

export const DoubleEntryDialog = ({ backgroundColor, foregroundColor, textColor, placeholderTextColor, onSet, trigger, onDismiss, defaultValue1, defaultValue2, title, description, icon }) => {

    const [value1, setValue1] = useState(defaultValue1 ? defaultValue1 : '');
    const [value2, setValue2] = useState(defaultValue2 ? defaultValue2 : '');

    const onConfirmPress = () => {
        onSet(value1, value2);
    }

    const dismissDialog = () => {
        onDismiss(false);
    }

    return (
        <Modal
            visible={trigger}
            onDismiss={dismissDialog}
            contentContainerStyle={{
                ...styles.container_style,
                backgroundColor: backgroundColor,
            }}>
            <View style={styles.modal_box}>
                <Icon name={icon} size={24} color={foregroundColor} />
                <Text
                    variant="headlineSmall"
                    style={{
                        ...styles.modal_text_title,
                        color: textColor,
                    }}>
                    {title}
                </Text>
                <Text
                    variant="bodyMedium"
                    style={{
                        ...styles.modal_text_desc,
                        color: textColor,
                    }}>
                    {description}
                </Text>
                <TextInput
                    placeholder="0.00"
                    placeholderTextColor={placeholderTextColor}
                    style={{ ...styles.text_input, color: textColor }}
                    value={value1}
                    inputMode='numeric'
                    onChangeText={value1 => setValue1(enterAmount(value1))}
                />
                <TextInput
                    label="Description"
                    placeholder="Coffee at Starbucks"
                    placeholderTextColor={placeholderTextColor}
                    style={{ ...styles.text_input, color: textColor }}
                    value={value2}
                    onChangeText={value2 => setValue2(value2)}
                />
            </View>
            <View style={styles.button_row}>
                <Button mode="text" onPress={() => dismissDialog()}>
                    Cancel
                </Button>
                <Button
                    mode="text"
                    onPress={() => {
                        onConfirmPress();
                        dismissDialog();
                        setValue1('');
                        setValue2('');
                    }}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};