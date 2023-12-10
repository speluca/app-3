import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function Resultimc(props){
    return(
        <View style={styles.contextImc}>
             
             <Text style={styles.inform}>{props.messageResultimc}</Text>
             <Text style={styles.numberImc}>{props.Resultimc}</Text>
        </View>
    );
}