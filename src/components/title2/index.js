import React from "react"
import {View, Text} from "react-native"
import styles from "../title/style";

export default function Title2(){
    return(
        <View style={styles.boxtitle}>
             <Text style={styles.texttitle}>Calculadora de Gorjeta</Text>
        </View>
    );
}