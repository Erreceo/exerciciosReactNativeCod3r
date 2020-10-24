import React, {useState} from 'react';
import Filho from './Filho';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default (props) => {
  const [numero, setNumero] = useState(0);

  function exibirValor(valor) {
    setNumero(valor);
  }
  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Filho funcao={exibirValor} min={1} max={60} />
    </>
  );
};
