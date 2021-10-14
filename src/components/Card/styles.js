import { StyleSheet } from "react-native";
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderColor: colors.light,
        borderRadius: 5,
        borderWidth: 2,
        elevation: 5,
        margin: 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});

export default styles;