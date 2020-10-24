import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({min, max}) => {
  const delta = max - min + 1;
  const numAlearorio = min + Math.floor(delta * Math.random());

  return <Text style={Estilo.txtG}>O valor aleatório é {numAlearorio}</Text>;
};
