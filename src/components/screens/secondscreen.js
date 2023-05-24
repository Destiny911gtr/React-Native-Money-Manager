import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, FAB, IconButton, List, Modal, Portal, Text, TextInput, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Expenditure, realmConfig } from '../../utils/database';

import { styles } from '../../styles/screens/secondscreen';
import { enterAmount } from '../../utils/helperFuntions';

const { useRealm, useQuery } = realmConfig;

function Secondscreen() {
    const theme = useTheme();
    const realm = useRealm();
    const listData = useQuery(Expenditure);
    const [addModalVisible, setAddVisibility] = useState(false);
    const [newExpValue, setNewExp] = useState();
    const [newExpDescValue, setNewExpDesc] = useState('');
    const addModalTrigger = () => setAddVisibility(!addModalVisible);

    const Fab = () => (
        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => {
                addModalTrigger();
            }}
        />
    );

    const writeToDb = (id, amount, desc) => {
        realm.write(() => {
            realm.create('Expenditure', { _id: id, amount: amount, desc: desc, date: new Date() });
        });
    };

    const deleteFromDb = (item) => {
        realm.write(() => {
            realm.delete(item);
        })
    };

    const addToRdxList = (amount, description) => {
        writeToDb(getUniqueString(), parseFloat(amount), description);
        setNewExp('');
        setNewExpDesc('');
    };

    const getUniqueString = () => {
        return new Date().getTime() + Math.floor(Math.random() * 100) + 1;
    }

    const Item = ({ amount, description, item }) => (
        <List.Item
            title={amount}
            description={description}
            style={{
                ...styles.singleItemStyle,
                backgroundColor: theme.colors.backdrop,
            }}
            left={props => <List.Icon {...props} icon="cash-multiple" />}
            right={props => (
                <IconButton
                    {...props}
                    iconColor={theme.colors.error}
                    icon="delete-outline"
                    mode="contained-tonal"
                    onPress={() => deleteFromDb(item)}
                />
            )}
        />
    );

    const FooterItem = () => (
        <List.Item
            style={{
                height: 85,
            }}
        />
    );

    const renderFooterItem = () => <FooterItem />;

    const renderItem = ({ item }) => (
        <Item amount={item.amount} description={item.desc} item={item} />
    );

    return (
        <View style={{ ...styles.screen, backgroundColor: theme.colors.background }}>
            <FlatList
                style={styles.list_view}
                data={listData}
                renderItem={renderItem}
                ListFooterComponent={renderFooterItem}
                keyExtractor={item => item._id}
            />
            <Fab />
            <Portal>
                <Modal
                    visible={addModalVisible}
                    onDismiss={addModalTrigger}
                    contentContainerStyle={{
                        ...styles.container_style,
                        backgroundColor: theme.colors.background,
                        height: 370,
                    }}>
                    <View style={styles.modal_box}>
                        <Icon name="cash-plus" size={24} color={theme.colors.secondary} />
                        <Text
                            variant="headlineSmall"
                            style={{
                                ...styles.modal_text_title,
                                color: theme.colors.onSurface,
                            }}>
                            Add Expense
                        </Text>
                        <Text
                            variant="bodyMedium"
                            style={{
                                ...styles.modal_text_desc,
                                color: theme.colors.onSurface,
                            }}>
                            Enter the amount and set a description to remind yourself
                        </Text>
                        <TextInput
                            label="Amount"
                            placeholder="0.00"
                            placeholderTextColor={theme.colors.onSurfaceDisabled}
                            style={{ ...styles.text_input, color: theme.colors.onSurface }}
                            value={newExpValue}
                            onChangeText={newExpValue => setNewExp(enterAmount(newExpValue))}
                        />
                        <TextInput
                            label="Description"
                            placeholder="Coffee at Starbucks"
                            placeholderTextColor={theme.colors.onSurfaceDisabled}
                            style={{ ...styles.text_input, color: theme.colors.onSurface }}
                            value={newExpDescValue}
                            onChangeText={newExpDescValue => setNewExpDesc(newExpDescValue)}
                        />
                    </View>
                    <View style={styles.button_row}>
                        <Button
                            mode="text"
                            onPress={() => {
                                addModalTrigger();
                            }}>
                            Cancel
                        </Button>
                        <Button
                            mode="text"
                            onPress={() => {
                                addToRdxList(newExpValue, newExpDescValue);
                                addModalTrigger();
                            }}>
                            Add
                        </Button>
                    </View>
                </Modal>
            </Portal>
        </View>
    );
}

export default Secondscreen;