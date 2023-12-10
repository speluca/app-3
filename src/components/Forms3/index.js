import React, {useState} from "react"
import { TextInput, View, Text, Button, TouchableOpacity} from "react-native";
import Resultimc from "../Resultimc";
import ResultConv from "../ResultConv";
import styles from "../Forms/style";

export default function Forms3(){
    
    const[dinheiro, setDinheiro] = useState(null)
    const[message, setMessage] = useState("Preencha o Valor")
    const[messagedolar, setMessagedolar] = useState(null)
    const[messageeuro, setMessageeuro] = useState(null)
    const[messageiene,setMessageiene]= useState(null)
    
    const[dolar, setDolar] = useState(null)
    const[euro, setEuro] = useState(null)
    const[iene, setIene] = useState(null)

    const[TextButton,setTextButton] = useState("Converter")
    
    function ConversorM(){
        return setDolar((dinheiro*4.90).toFixed(2)), setEuro((dinheiro*5.29).toFixed(2)), 
        setIene((dinheiro*0.033).toFixed(2))
    }
    
    function validacao3(){
        if(dinheiro!= null){
        ConversorM()
        setDinheiro(null)
        setMessage(null)
        setMessagedolar("Em Dolar, a moeda equivale a:")
        setMessageeuro("Em Euro, a moeda equivale a:")
        setMessageiene("Em Iene, a moeda equivale a: ")
        setTextButton("Converter Novamente")
        return
        }
        setTextButton("Converter")
        setMessage("Preencha o Valor")
        setDolar(null)
        setEuro(null)
        setIene(null)
        setMessagedolar(null)
        setMessageeuro(null)
        setMessageiene(null)
    }

    return(
        <View style={styles.formContext}>  
             <View style={styles.form}>

                <Text style={styles.formLabel}>Valor em Reais</Text>
                <TextInput style={styles.imput} onChangeText={setDinheiro} 
                value={dinheiro}
                placeholder="Ex:1000"
                keyboardType="numeric"></TextInput>

                <TouchableOpacity style={styles.buttonCalculator}
                onPress={()=>{
                    validacao3()
                }}>
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
             </View>
             <ResultConv messageResultconv={messagedolar} ResultConv={dolar}/>
             <ResultConv messageResultconv={messageeuro} ResultConv={euro}/>
             <ResultConv messageResultconv={messageiene} ResultConv={iene}/>
        </View>
        
    );
}