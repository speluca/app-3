import React, {useState} from "react"
import { TextInput, View, Text, Button, TouchableOpacity} from "react-native";
import Resultimc from "../Resultimc";
import styles from "./style";
export default function Forms(){
    
    const[height, setHeight] = useState(null)
    const[weight, setWeight] = useState(null)
    const[messageimc, setMessageimc] = useState("Preencha o peso e a altura")
    const[imc, setImc] = useState(null)
    const[TextButton,setTextButton] = useState("Calcular")
    
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    function validacao(){
        if(weight!= null && height!= null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageimc("Seu Peso é igual a:")
        setTextButton("Calcular Novamente")
        return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageimc("Preencha o peso e a altura")
    }

    return(
        <View style={styles.formContext}>
             <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.imput}
                onChangeText={setHeight} 
                value={height}
                placeholder="Ex:1.60"
                keyboardType="numeric"></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.imput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex:75.500"
                keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.buttonCalculator}
                onPress={()=>{
                    validacao()
                }}>
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
             </View>
             <Resultimc messageResultimc={messageimc} Resultimc={imc}/>
        </View>
    );
}