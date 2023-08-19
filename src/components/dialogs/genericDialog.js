import { memo, useState } from "react";
import { View } from "react-native";
import { Button, Modal, Text, TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../../styles/dialogs/genericDialog';
import { enterAmount } from '../../utils/helperFuntions';
import { useSelector } from "react-redux";


const GenericDialog = ({ backgroundColor, foregroundColor, textColor, placeholderTextColor, onSet, trigger, onDismiss, defaultValue, title, description, icon }) => {

    const [value, setValue] = useState(defaultValue ? defaultValue : '');

    const onSetPress = () => {
        onSet(value);
    }

    const dismissDialog = () => {
        setValue('');
        onDismiss();
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
                    value={value == '0' ? null : String(value)}
                    inputMode='numeric'
                    onChangeText={value => setValue(enterAmount(value))}
                />
            </View>
            <View style={styles.button_row}>
                <Button mode="text" onPress={() => dismissDialog()}>
                    Cancel
                </Button>
                <Button
                    mode="text"
                    onPress={() => {
                        onSetPress();
                        dismissDialog();
                    }}>
                    Set
                </Button>
            </View>
        </Modal>
    );
};

export default memo(GenericDialog);