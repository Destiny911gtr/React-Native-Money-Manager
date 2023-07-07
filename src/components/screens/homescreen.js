import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import {
    Appbar,
    FAB,
    IconButton,
    List,
    Portal,
    Text,
    useTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { addExpense, removeExpense, setBalance, setLimit } from '../../actions/homeScreenActions';
import { itemStyle, styles } from '../../styles/screens/homescreen';
import { Expenditure, realmConfig } from '../../utils/database';
import { dateConvertor, renderDescription, storeData } from '../../utils/helperFuntions';
import { DoubleEntryDialog } from '../dialogs/doubleEntryDialog';
import { GenericDialog } from '../dialogs/genericDialog';
import Dashboard from '../modules/dashboard';

const { useRealm, useQuery } = realmConfig;

function Homescreen() {
    const barStyles = ['default', 'dark-content', 'light-content'];
    const theme = useTheme();
    const dispatch = useDispatch();
    const realm = useRealm();
    const listData = useQuery(Expenditure);
    const limit = useSelector(state => state.limit);
    const balance = useSelector(state => state.balance);
    const spent = useSelector(state => state.spent);
    const [statusBarStyle, setStatusBarStyle] = useState(barStyles[0]);
    const [addModalVisible, setAddVisibility] = useState(false);
    const [limitDialogVisible, setLimitVisibility] = useState(false);
    const [balanceDialogVisible, setBalanceVisibility] = useState(false);
    const limitModalTrigger = () => setLimitVisibility(!limitDialogVisible);
    const balanceModalTrigger = () => setBalanceVisibility(!balanceDialogVisible);
    const addModalTrigger = () => setAddVisibility(!addModalVisible);

    useEffect(() => {
        setStatusBarColor();
    }, []);

    const setStatusBarColor = () => {
        theme.dark ? setStatusBarStyle(barStyles[2]) : setStatusBarStyle(barStyles[1])
    }

    const writeToDb = (id, amount, desc) => {
        realm.write(() => {
            realm.create('Expenditure', { _id: id, amount: amount, desc: desc, date: new Date() });
        });
    };

    const deleteFromDb = (item) => {
        storeData('@balance', String(parseFloat(balance) + parseFloat(item.amount)));
        storeData('@spent', String(parseFloat(spent) - parseFloat(item.amount)));
        rmRdxExpense(item.amount);
        realm.write(() => {
            realm.delete(item);
        })
    };

    const getUniqueString = () => {
        return new Date().getTime() + Math.floor(Math.random() * 100) + 1;
    }

    const setRdxLimit = limit => {
        dispatch(setLimit(limit));
    };

    const setRdxBalance = balance => {
        dispatch(setBalance(balance));
    };

    const setRdxExpense = expense => {
        dispatch(addExpense(expense));
    }

    const rmRdxExpense = expense => {
        dispatch(removeExpense(expense));
    }

    const addToRdxList = (amount, description) => {
        writeToDb(getUniqueString(), parseFloat(amount), description);
        storeData('@balance', String(parseFloat(balance) - parseFloat(amount)));
        storeData('@spent', String(parseFloat(spent) + parseFloat(amount)));
        setRdxExpense(amount);
    };

    const Fab = () => (
        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => {
                addModalTrigger();
            }}
        />
    );

    const Item = ({ id, amount, description, date, item }) => (
        <List.Item
            title={'₹' + amount}
            description={renderDescription(description) + '\n' + dateConvertor(date)}
            descriptionNumberOfLines={2}
            style={{
                ...itemStyle(id, listData),
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
        <Item id={item._id} amount={item.amount} description={item.desc} date={item.date} item={item} />
    );

    return (
        <View
            style={{ ...styles.screen, backgroundColor: theme.colors.background }}>
            <StatusBar barStyle={statusBarStyle} backgroundColor="transparent" translucent={true} />
            <View style={styles.home_view}>
                <Dashboard
                    primary={theme.colors.primaryContainer}
                    secondary={theme.colors.secondaryContainer}
                    textColor={theme.colors.onSurface}
                    limitDialog={limitModalTrigger}
                    balanceDialog={balanceModalTrigger}
                />
                {listData != 0 && (
                    <FlatList
                        style={styles.list_view}
                        data={listData}
                        renderItem={renderItem}
                        ListFooterComponent={renderFooterItem}
                        keyExtractor={item => item._id}
                    />
                )}
                {listData == 0 && (
                    <View style={styles.placeholder}>
                        <Text
                            style={{
                                ...styles.placeholder_text,
                                color: theme.colors.onSurfaceVariant,
                            }}>
                            No entries yet
                        </Text>
                    </View>
                )}
            </View>
            <Portal>
                <GenericDialog
                    backgroundColor={theme.colors.background}
                    foregroundColor={theme.colors.secondary}
                    textColor={theme.colors.onSurface}
                    placeholderTextColor={theme.colors.onSurfaceDisabled}
                    onSet={setRdxLimit}
                    onDismiss={limitModalTrigger}
                    trigger={limitDialogVisible}
                    defaultValue={limit}
                    title={"Limit"}
                    description={"Enter your maximum expenditure limit for a month"}
                    icon={"cash-fast"}
                />
                <GenericDialog
                    backgroundColor={theme.colors.background}
                    foregroundColor={theme.colors.secondary}
                    textColor={theme.colors.onSurface}
                    placeholderTextColor={theme.colors.onSurfaceDisabled}
                    onSet={setRdxBalance}
                    onDismiss={balanceModalTrigger}
                    trigger={balanceDialogVisible}
                    defaultValue={balance}
                    title={"Balance"}
                    description={"Enter your account balance available for expenditure"}
                    icon={"cash-multiple"}
                />
                <DoubleEntryDialog
                    backgroundColor={theme.colors.background}
                    foregroundColor={theme.colors.secondary}
                    textColor={theme.colors.onSurface}
                    placeholderTextColor={theme.colors.onSurfaceDisabled}
                    onSet={addToRdxList}
                    onDismiss={setAddVisibility}
                    trigger={addModalVisible}
                    defaultValue1={spent}
                    title={"Add Expense"}
                    description={"Enter the amount and set a description to remind yourself"}
                    icon={"cash-plus"}
                />
            </Portal>
            <Fab />
        </View>
    );
}

export default Homescreen;
