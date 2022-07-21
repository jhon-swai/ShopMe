import React, {useState} from "react";
import { View, StyleSheet, FlatList , Alert} from "react-native";

import uuid from 'react-uuid'


// components
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: "mango"},
    {id: uuid(), text: "berry"},
    {id: uuid(), text: "lemon"},
    {id: uuid(), text: "cake"}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const emptyItemAlert = ()=>{
    Alert.alert('Error', "Please enter text", [{text: "Ok"},])
  }

  const addItem = (text) => {
    if (!text) emptyItemAlert();

    else{
      setItems( prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      })
    }
  }

  const renderItems = ({item}) => (
    <ListItem item={item} deleteItem={deleteItem} />    
  )
  
  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      
      <FlatList
        data={items}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />

      <AddItem addItem={addItem}/>
      
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
