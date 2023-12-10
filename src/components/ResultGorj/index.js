import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function Resultgorj(props){
    return(
        <View style={styles.contextGorj}>
             
             <Text style={styles.inform}>{props.messageResultgorj}</Text>
             <Text style={styles.numberGorj}>{props.Resultgorj}</Text>
        </View>
    );
}