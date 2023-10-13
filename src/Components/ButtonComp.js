import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComp = ({
    text = 'DONE',
    onPress = () => { },
    disabled = false,
    btnStyle = {},
    isLoading = false
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.container,
                backgroundColor: !disabled ? '#D7654D' : 'grey',
                ...btnStyle,

            }}
            disabled={disabled}
        >
            {isLoading ? <ActivityIndicator size={'small'} /> : <Text style={styles.textStyle}>{text}</Text>}


        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 42,
        marginHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
});

export default ButtonComp;
