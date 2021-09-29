import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar
} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
];

const Item = ({ title }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);
  

function Lista(): any {

    const renderItem = ({ item }: any) => (
        <Item title={item["name"]} />
      );

    let [dados, setDados] = useState([]);

    useEffect(() => {
        console.log("_____________________________________________________________________________");
        axios.get("https://api.github.com/users/zadhart/repos")
        .then(response => setDados(response.data))
        .catch(err => console.log(err))
        console.log("#########################################################################")
        console.log(typeof(dados[0].name))
    }, [])

    return(
        <FlatList 
          data={dados}
          renderItem={renderItem}
          keyExtractor={item => item.node_id}
        />
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#92A8D1',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});

export default Lista;