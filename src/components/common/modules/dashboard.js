import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { memo, useMemo } from "react";
import { styles } from "../../styles/modules/dashboard";

const mapStateToProps = (state) => ({
    limit: state.limit,
    spent: state.spent,
    balance: state.balance,
    initialBalance: state.initialBalance
})

const Dashboard = ({ limit, spent, balance, initialBalance, limitDialog, balanceDialog, primary, secondary, textColor }) => {

    let currentBal = initialBalance - spent;
    let balancePercentage = initialBalance == '0' || initialBalance == '' ? 0 : parseFloat(currentBal / initialBalance) * 100;
    let limitPercentage = limit == '0' ? 0 : parseFloat(spent / limit) * 100;

    limitTrigger = () => {
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
        <TouchableOpacity
            onPress={limitTrigger}
            style={styles.limit_box}>
            <View>
                <Text style={styles.label_style}>Limit</Text>
                <Text style={styles.value_style}>₹{limit - spent}</Text>
                <Text style={styles.value_sub}>of ₹{limit} left</Text>
            </View>
        </TouchableOpacity>
    )

    const ExpWidget = () => (
        <TouchableOpacity
            onPress={limitTrigger}
            style={styles.limit_box}>
            <View
                style={styles.exp_box}>
                <View>
                    <Text style={styles.label_style}>You've Spent</Text>
                    <Text numberOfLines={1} style={styles.value_style}>₹{spent}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const BalanceWidget = () => (
        <TouchableOpacity
            onPress={balanceTrigger}
            style={styles.bal_box}>
            <View>
                <Text style={styles.label_style}>Balance</Text>
                <Text numberOfLines={1} style={styles.value_style}>₹{currentBal}</Text>
                <Text numberOfLines={1} style={styles.value_sub}>of ₹{initialBalance}</Text>
            </View>
        </TouchableOpacity>
    )

    const HalfProgresBar = ({ progress }) => {
        const circularProgressBar = useMemo(() => (
            <AnimatedCircularProgress
                size={90}
                width={8}
                rotation={195}
                lineCap="round"
                fill={progress}
                arcSweepAngle={150}
                tintColor="#00e0ff"
                backgroundColor="rgba(0, 0, 0, 0.15)"
                style={{ borderRadius: 100 }}
            />
        ), [progress]);

        return circularProgressBar;
    };

    const DashboardContent = () => {
        const widgets = useMemo(() => (
            <View style={{
                ...styles.info_row,
                backgroundColor: primary,
                borderColor: "rgba" + String(primary).split("rgb")[1].split(")")[0] + ", 0.5)"
            }}>
                {limit == 0 && <View style={styles.progress_bar_left}>
                    <HalfProgresBar
                        progress={balancePercentage}
                    />
                </View>}
                {limit != 0 && <View style={styles.progress_bar_left}>
                    <HalfProgresBar
                        progress={limitPercentage}
                    />
                </View>}
                <View style={{ paddingHorizontal: 30, flexDirection: 'row' }}>
                    {limit != 0 && <LimitWidget />}
                    <ExpWidget />
                    <BalanceWidget />
                </View>
                <View style={styles.progress_bar_right}>
                    <HalfProgresBar
                        progress={balancePercentage}
                    />
                </View>
            </View>
        ), [limit, spent, balance, limitPercentage, balancePercentage]);

        return widgets;
    };

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.dashboard,
                backgroundColor: secondary,
            }}>
                <GreetWidget />
                {/* <View style={styles.animation_view}>
                    <Text>Balance</Text>
                    <ProgressBar progress={balancePercentage} color={"rgba(0, 255, 225, 0.75)"} style={styles.progress_bar} />
                    <ProgressBar progress={limitPercentage} color={"rgba(0, 255, 225, 0.75)"} style={styles.progress_bar} />
                    <Text>Limit</Text>
                </View> */}
                <DashboardContent />
            </View>
        </View>
    );
};

export default connect(mapStateToProps)(memo(Dashboard));