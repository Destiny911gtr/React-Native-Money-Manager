import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';

import { styles } from "../../styles/modules/dashboard";

const mapStateToProps = (state) => ({
    limit: state.limit,
    spent: state.spent,
    balance: state.balance
})

const Dashboard = ({ limit, spent, balance, limitDialog, balanceDialog, primary, secondary, textColor }) => {

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
                <Text style={styles.label_style}>Your limit</Text>
                <Text style={styles.value_style}>₹{limit}</Text>
            </View>
        </TouchableOpacity>
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
        <TouchableOpacity
            onPress={balanceTrigger}
            style={styles.bal_box}>
            <View>
                <Text style={styles.label_style}>Balance</Text>
                <Text numberOfLines={1} style={styles.value_style}>₹{balance}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.dashboard,
                backgroundColor: secondary
            }}>
                <GreetWidget />
                <View style={styles.animation}>
                    <Lottie source={require('../../assets/lottie/lottieanimation-phone.json')} autoPlay={true} loop={true} />
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