import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxtitle}>
             <Text style={styles.texttitle}>Calculadora de IMC</Text>
        </View>
    );
}