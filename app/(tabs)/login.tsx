import { StyleSheet, Text, View } from "react-native";

export default function LoginPage() {
    return(
        <View>
            <Text style={style.createHeader}>Create an account</Text>
            <Text style={style.enterEmailHeader}>Enter your email to sign up for this app</Text>
            <Text style={style.buttonContinue}>Continue</Text>
            <Text style={style.orHeader}>--------------------or--------------------</Text>
            <Text style={style.guestHeader}>Continue as guest</Text>
        </View>
    );
}

const style = StyleSheet.create({
    createHeader: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 250,
    },
    enterEmailHeader: {
        textAlign: "center",
        fontSize: 14,
        marginTop: -243,
    },
    buttonContinue: {
        left: 760,
        marginTop: 100,
        fontSize: 30,
        textAlign: "center",
        width: 200,
        height: 40,
        backgroundColor: "black",
        color: "white",
        borderRadius: 40,
    },
    orHeader: {
        textAlign: "center",  
        marginTop: 50,
        fontSize: 15,
    },
    guestHeader: {
        textAlign: "center",
        marginTop: 25,
        fontSize: 13,
    },
})