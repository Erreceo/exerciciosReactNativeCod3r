import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, Button, View} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQuantidadeNumero = (qtdeNumeros) => {
    this.setState({...this.state, qtdeNumeros});
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = Math.floor(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const qtdeNumeros = parseInt(this.state.qtdeNumeros, 10);
    const numeros = Array(qtdeNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const {numeros} = this.state;
    return numeros.map((n, idx) => {
      return <MegaNumero num={n} key={idx} />;
    });
  };
  render() {
    const style = StyleSheet.create({
      Input: {
        borderBottomWidth: 1,
      },
      List: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    });

    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={style.Input}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQuantidadeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View style={style.List}>{this.exibirNumeros()}</View>
      </>
    );
  }
}
