import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button
} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/core";

type RootStackParamList = {
  Lista: undefined;
  Procura: undefined;
};


type homeScreenProp = StackNavigationProp<RootStackParamList, 'Procura'>;


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

    const navigation = useNavigation<homeScreenProp>();

    useEffect(() => {
        console.log("_____________________________________________________________________________");
        axios.get("https://api.github.com/users/zadhart/repos")
        .then(response => setDados(response.data))
        .catch(err => console.log(err))
        console.log("#########################################################################")
    }, [])

    return(
      <View>
        <Button 
        title="VOLTAR"
        onPress = {() => navigation.navigate("Procura")}/>
        <FlatList 
          data={dados}
          renderItem={renderItem}
          keyExtractor={item => item.node_id}
        />      
      </View>        
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
      borderRadius: 15
    },
    title: {
      fontSize: 32,
    },
});

export default Lista;