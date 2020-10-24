import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import Membro from './Membro';

export default (props) => {
  return (
    <>
      <Text style={Estilo.txtG}>Membros da Famila:</Text>
      {props.children}
    </>
  );
};
