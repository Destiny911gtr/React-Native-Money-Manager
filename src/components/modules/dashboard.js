import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";

import { styles } from "../../styles/screens/homescreen";

const mapStateToProps = (state) => ({
    limit: state.limit,
    spent: state.spent,
    balance: state.balance
})

const Dashboard = ({ limit, spent, balance, limitDialog, balanceDialog, primary, secondary }) => {

    limitTrigger = () => {
        limitDialog();
    }

    balanceTrigger = () => {
        balanceDialog();
    }

    return (
        <View style={styles.info_grid}>
            <TouchableOpacity
                onPress={limitTrigger}
                style={{
                    ...styles.limit_box1,
                    backgroundColor: secondary,
                }}>
                <View>
                    <Text style={styles.lebel_style}>Your Limit</Text>
                    <Text numberOfLines={1} style={styles.value_style}>₹{limit}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.limit_box2}>
                <View
                    style={{
                        ...styles.exp_box,
                        backgroundColor: secondary,
                    }}>
                    <View>
                        <Text style={styles.lebel_style}>You've Spent</Text>
                        <Text numberOfLines={1} style={styles.value_style}>₹{spent}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={balanceTrigger}
                    style={{
                        ...styles.bal_box,
                        backgroundColor: primary,
                    }}>
                    <View>
                        <Text style={styles.lebel_style}>Balance</Text>
                        <Text numberOfLines={1} style={styles.value_style}>₹{balance}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default connect(mapStateToProps)(Dashboard);