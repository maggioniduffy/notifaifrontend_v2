import { StyleSheet } from "react-native";
import { colors } from '../../utils/theme';
import { DEVICE_HEIGHT } from '../../utils/dimensions';

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: DEVICE_HEIGHT*0.08,
        justifyContent: 'center',
        padding: 'auto',
        width: '100%',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})

export default styles;