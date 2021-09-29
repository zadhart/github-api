 import React from 'react';
 import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar
 } from 'react-native';
 import axios from 'axios';
 import { useEffect, useState } from 'react';
 import Lista from './lista';

 
function Testando(): any {

  let [dados, setDados] = useState([]);

  /*
  useEffect(() => {
    console.log("_____________________________________________________________________________");
    axios.get("https://api.github.com/users/zadhart/repos")
    .then(response => console.log(response["data"][1]["name"]))
    .catch(err => console.log(err))
  }, [])
  */
  useEffect(() => {
    console.log("_____________________________________________________________________________");
    axios.get("https://api.github.com/users/zadhart/repos")
    .then(response => setDados(response.data))
    .catch(err => console.log(err))
    console.log("#########################################################################")
    //console.log(dados[2]["name"])
  }, [])


  return (
    <Text>"Teste"</Text>
  );
}



 const App = () => {

   return (
      <SafeAreaView style={styles.container}>
        <Lista></Lista>
        
      </SafeAreaView>
   );   
 };

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

 export default App;
