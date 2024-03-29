import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StatusBar, View, BackHandler } from 'react-native';
import {
    FAB,
    IconButton,
    List,
    Portal,
    Text,
    useTheme
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import RealmPlugin from 'realm-flipper-plugin-device';

import { addExpense, removeExpense, setBalance, setExpense, setInitBalance, setLimit } from '../../redux/actions/actions';
import { itemStyle, styles } from '../styles/screens/homescreen';
import { Expenditure, realmConfig } from '../../utils/database';
import { dateConvertor, renderDescription } from '../../utils/helperFuntions';
import DoubleEntryDialog from '../common/dialogs/doubleEntryDialog';
import GenericDialog from '../common/dialogs/genericDialog';
import Dashboard from '../common/modules/dashboard';

const { useRealm, useQuery } = realmConfig;

const Homescreen = () => {
    const barStyles = ['default', 'dark-content', 'light-content'];
    const theme = useTheme();
    const dispatch = useDispatch();
    const realm = useRealm();
    const listData = useQuery(Expenditure);
    const limit = useSelector(state => state.limit);
    const balance = useSelector(state => state.balance);
    const [statusBarStyle, setStatusBarStyle] = useState(barStyles[0]);
    const [addModalVisible, setAddVisibility] = useState(false);
    const [limitDialogVisible, setLimitVisibility] = useState(false);
    const [balanceDialogVisible, setBalanceVisibility] = useState(false);
    const limitModalTrigger = () => setLimitVisibility(!limitDialogVisible);
    const balanceModalTrigger = () => setBalanceVisibility(!balanceDialogVisible);
    const addModalTrigger = () => setAddVisibility(!addModalVisible);

    useEffect(() => {
        setStatusBarColor();
        const backHandler = BackHandler.addEventListener('hardwareBackPress', function () {
            BackHandler.exitApp();
        });
        return () => backHandler.remove();
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
        dispatch(setInitBalance(balance));
    };

    const setRdxExpense = () => {
        dispatch(setExpense(listData.sum('amount')));
    }

    const rmRdxExpense = expense => {
        dispatch(removeExpense(expense));
    }

    const addToRdxList = (amount, description) => {
        writeToDb(getUniqueString(), parseFloat(amount), description);
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

    const Item = ({ id, amount, description, date, item }) => {
        const ListItem = useMemo(() => (
            <List.Item
                title={'₹' + amount}
                description={renderDescription(description) + '\n' + dateConvertor(date)}
                descriptionNumberOfLines={2}
                style={{
                    ...itemStyle(id, listData),
                    backgroundColor: theme.colors.backdrop,
                }}
                left={() => <List.Icon style={{ alignItems: 'center', paddingLeft: 20, paddingRight: 10 }} icon="cash-multiple" />}
                right={() => (
                    <IconButton
                        iconColor={theme.colors.error}
                        icon="delete-outline"
                        mode="contained-tonal"
                        onPress={() => deleteFromDb(item)}
                    />
                )}
            />
        ), []);

        return ListItem;
    };

    const FooterItem = () => (
        <List.Item
            style={{
                height: 85,
            }}
        />
    );

    const HeaderItem = () => (
        <List.Item
            style={{
                height: 55,
            }}
        />
    );

    const renderFooterItem = () => <FooterItem />;

    const renderHeaderItem = () => <HeaderItem />;

    const renderItem = ({ item }) => (
        <Item id={item._id} amount={item.amount} description={item.desc} date={item.date} item={item} />
    );

    const ListView = () => {
        const List = useMemo(() => {
            return (
                <FlatList
                    style={styles.list_view}
                    data={listData}
                    renderItem={renderItem}
                    ListFooterComponent={renderFooterItem}
                    ListHeaderComponent={renderHeaderItem}
                    keyExtractor={item => item._id}
                />
            );
        }, [listData.length]);

        return List;
    };

    return (
        <View style={{ ...styles.screen, backgroundColor: theme.colors.background }}>
            {/* Flipper realm db plugin */}
            {__DEV__ && <RealmPlugin realms={[realmConfig.useRealm()]} />}
            <StatusBar barStyle={statusBarStyle} backgroundColor="transparent" translucent={true} />
            <View style={styles.home_view}>
                <Dashboard
                    primary={theme.colors.primaryContainer}
                    secondary={theme.colors.secondaryContainer}
                    textColor={theme.colors.onSurface}
                    limitDialog={limitModalTrigger}
                    balanceDialog={balanceModalTrigger}
                />
                {listData.length != 0 && <ListView />}
                {listData.length == 0 &&
                    <View style={styles.placeholder}>
                        <Text
                            style={{
                                ...styles.placeholder_text,
                                color: theme.colors.onSurfaceVariant,
                            }}>
                            No entries yet
                        </Text>
                    </View>}
            </View>
            <Portal>
                {/* Set Limit Dialog */}
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
                {/* Set Balance Dialog */}
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
                {/* Add Expense Dialog */}
                <DoubleEntryDialog
                    backgroundColor={theme.colors.background}
                    foregroundColor={theme.colors.secondary}
                    textColor={theme.colors.onSurface}
                    placeholderText={"Coffee at Starbucks"}
                    placeholderTextColor={theme.colors.onSurfaceDisabled}
                    onSet={addToRdxList}
                    onDismiss={setAddVisibility}
                    trigger={addModalVisible}
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
