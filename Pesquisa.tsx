import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Lista: undefined;
  Procura: undefined;
};


type homeScreenProp = StackNavigationProp<RootStackParamList, 'Procura'>;

const Procura: React.FC = () =>{
  const [text, onChangeText] = React.useState("");

  const navigation = useNavigation<homeScreenProp>();

  function handleGoToReposScreen() {
    navigation.navigate("Lista")
  }

  return (
    <View>
        <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome"
      />
      <Button
        title="ENVIAR!"
        onPress={() => navigation.navigate("Lista")}
      />
    </View>
  );
};

export default Procura;