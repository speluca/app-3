import React, {useState} from "react"
import { TextInput, View, Text, Button, TouchableOpacity} from "react-native";
import Resultgorj from "../ResultGorj";
import styles from "../Forms/style";
import style from "../title2/style";
export default function Forms2(){
    
    const[valor, setValor] = useState(null)
    const[porc, setPorc] = useState(null)
    const[messagegorj, setMessagegorj] = useState("Preencha com Dinheiro e Porcentagem")
    const[gorj, setgorj] = useState(null)
    const[TextButton,setTextButton] = useState("Calcular")
    
    function gorjCalculator(){
        return setgorj((porc*valor/100).toFixed(2))

    }
    
    function validacao2(){
        if(porc!= null && valor!= null){
        gorjCalculator()
        setValor(null)
        setPorc(null)
        setMessagegorj("O Valor da Gorjeta é:")
        setTextButton("Calcular Novamente")
        return
        }
        setgorj(null)
        setTextButton("Calcular")
        setMessagegorj("Preencha com Dinheiro e Porcentagem")
    }

    return(
        <View style={styles.formContext}>
             <View style={styles.form}>

                <Text style={styles.formLabel}>Dinheiro</Text>
                <TextInput style={styles.imput} onChangeText={setValor} 
                value={valor}
                placeholder="Ex:100"
                keyboardType="numeric"></TextInput>

                <Text style={styles.formLabel}>Porcentagem da Gorjeta</Text>
                <TextInput style={styles.imput} onChangeText={setPorc}
                value={porc}
                placeholder="Ex:3"
                keyboardType="numeric"></TextInput>

                
                <TouchableOpacity style={styles.buttonCalculator}
                onPress={()=>{
                    validacao2()
                }}>
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
             </View>
             <Resultgorj messageResultgorj={messagegorj} Resultgorj={gorj}/>
        </View>
    );
}