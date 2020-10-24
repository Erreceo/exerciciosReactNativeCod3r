import React from 'react';
import {Button} from 'react-native';
import Estilo from '../estilo';

export default (props) => {
  function gerarNumero(min, max) {
    const delta = max - min + 1;
    return Math.floor(Math.random() * delta) + min;
  }
  return (
    <Button
      title="Executar"
      onPress={function () {
        const n = gerarNumero(props.min, props.max);
        props.funcao(n);
      }}
    />
  );
};
