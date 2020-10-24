import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Estilo from './estilo';

export default (props) => {
  let [nome, setNome] = useState('Teste');
  return (
    <View style={Estilo.txtG}>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={(nom) => setNome(nom)}
      />
    </View>
  );
};
