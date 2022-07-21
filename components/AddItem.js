import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import { TextInput , Button} from 'react-native-paper';

const AddItem = ({addItem}) => {

    const [text, setText] = useState("");

    const onChange = (textValue)=> setText(textValue);
    const clearText = ()=> setText("")
    const addItemOnPress = () => {
        addItem(text)
        clearText()
    }
    return (
        <View>
            <TextInput 
                placeholder="Add Item..." 
                style={styles.input}
                onChangeText={onChange}
                value={text}
                mode="flat"
                right={
                <TextInput.Icon 
                    name="plus" 
                    onPress={addItemOnPress} 
                    forceTextInputFocus={false}
                    color="green"
                    />
                }
                />
        </View> 
    );
}

export default AddItem;


const styles = StyleSheet.create({
  
    input: {
        height: 60,
        padding: 8,
        fontSize:16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnTxt: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: "center"
    }
});
