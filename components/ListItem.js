import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import { Checkbox } from "react-native-paper";

const ListItem = ({item, deleteItem}) => {
    const [checked, setChecked] = React.useState(false)
    const toggleChecked = () =>{
        setChecked(!checked)
    }

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.listItemView}>

            <View style={styles.listItem}>
                <Checkbox
                    status={ checked? 'checked': 'unchecked'}
                    onPress = {toggleChecked}
                />
                <Text style={styles.listItemText}>{item.text}</Text>
            </View>
            <Icon 
                name="remove" 
                size={20} 
                color="firebrick" 
                onPress={()=> deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  );
}

export default ListItem;



const styles = StyleSheet.create({
    container: {
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItem: {
        flexDirection: 'row',
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',   
        alignItems: 'center'

    },
    listItemText: {
        paddingTop: 6,
        fontSize: 18
    }
});
