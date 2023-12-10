import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function ResultConv(props){
    return(
        <View style={styles.contextConv}> 
             
             <Text style={styles.inform}>{props.messageResultconv}</Text>
             <Text style={styles.numberImc}>{props.Resultconv}</Text>
        </View>
    );
}