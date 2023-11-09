import {Text, View, StyleSheet} from "react-native";


const PolishKing = ({name, reignDate}) => {
    return(
        <View style={styles.container}>
            <Text>Polish King {name} {reignDate}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PolishKing;