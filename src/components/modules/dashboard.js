import { Pressable, View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from "../../styles/modules/dashboard";

const mapStateToProps = (state) => ({
    limit: state.limit,
    spent: state.spent,
    balance: state.balance,
    initialBalance: state.initialBalance
})

const Dashboard = ({ limit, spent, balance, initialBalance, limitDialog, balanceDialog, primary, secondary, textColor }) => {

    let currentBal = initialBalance - spent;
    let balancePercentage = initialBalance == '0' || initialBalance == '' ? 0 : parseFloat(balance / initialBalance);
    let limitPercentage = limit == '0' ? 0 : parseFloat(spent / limit);

    limitTrigger = () => {
        console.log(balance, initialBalance, balancePercentage);
        limitDialog();
    }

    balanceTrigger = () => {
        balanceDialog();
    }

    const GreetWidget = () => (
        <View style={{
            ...styles.heading_row
        }}>
            <Text numberOfLines={1} style={styles.main_text}>Hello!</Text>
            <Icon name="hand-wave" size={25} color={textColor} />
        </View>
    )

    const LimitWidget = () => (
        <Pressable
            onPress={limitTrigger}
            style={styles.limit_box}>
            <View>
                <Text style={styles.label_style}>Your limit</Text>
                <Text style={styles.value_style}>₹{limit}</Text>
            </View>
        </Pressable>
    )

    const ExpWidget = () => (
        <View
            style={styles.exp_box}>
            <View>
                <Text style={styles.label_style}>You've Spent</Text>
                <Text numberOfLines={1} style={styles.value_style}>₹{spent}</Text>
            </View>
        </View>
    )

    const BalanceWidget = () => (
        <Pressable
            onPress={balanceTrigger}
            style={styles.bal_box}>
            <View>
                <Text style={styles.label_style}>Balance</Text>
                <Text numberOfLines={1} style={styles.value_style}>₹{currentBal}</Text>
            </View>
        </Pressable>
    )

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.dashboard,
                backgroundColor: secondary
            }}>
                <GreetWidget />
                <View style={styles.animation_view}>
                    <Text>Balance</Text>
                    <ProgressBar progress={balancePercentage} color={"rgba(0, 255, 225, 0.75)"} style={styles.progress_bar} />
                    <ProgressBar progress={limitPercentage} color={"rgba(0, 255, 225, 0.75)"} style={styles.progress_bar} />
                    <Text>Limit</Text>
                </View>
                <View style={{
                    ...styles.info_row,
                    backgroundColor: primary
                }}>
                    <LimitWidget />
                    <ExpWidget />
                    <BalanceWidget />
                </View>
            </View>
        </View>
    );
};

export default connect(mapStateToProps)(Dashboard);