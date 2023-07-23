import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";


const InputBox = () => {

const [values, setValues] = useState({vault: '', bars: '', beam: '', floor: '', AA: ''});
   
const handleChange = (name, value) => {
    setValues({
        ...values,
        [name]: value
    });
};

return(
                    
        <TextInput 
            style={styles.input}
            onChangeText={(text) => handleChange('vault', text)}
            value={values.vault}
          />

);

};
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 3,
        
    },
});

export default InputBox;