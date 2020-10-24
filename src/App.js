import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
// import ParImpar from './components/ParImpar';
// import ContadorV2 from './components/contador/ContadorV2';

// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
//import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';

// import Diferenciar from './components/Diferenciar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexBoxV1 from './components/layout/FlexBoxV1';
// import FlexBoxV2 from './components/layout/FlexBoxV2';
// import FlexBoxV3 from './components/layout/FlexBoxV3';
// import FlexBoxV4 from './components/layout/FlexBoxV4';
import Mega from './components/mega/Mega';
export default () => (
  <SafeAreaView style={style.App}>
    {/* <Primeiro />
    <Comp1 />
    <Comp2 />
    <CompPadrao /> */}
    {/* <MinMax min={3} max={20} />
    <MinMax min={1} max={94} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de cadastro de produto"
    />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Pai />
    <Aleatorio min={1} max={60} />
    <Botao />
    <Pai />
    <ContadorV2 />
    <Diferenciar />
    <ParImpar num={3} />
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
    </Familia>
    <UsuarioLogado
      usuario={{nome: 'Rodrigo', email: 'rodrigo.cardoso.oliveira@gmail.com'}}
    />
    <ListaProdutos />
    <ListaProdutosV2 />
    <DigiteSeuNome />
    <FlexBoxV1 />
    <FlexBoxV2 />
    <FlexBoxV3 />
    <FlexBoxV4 />
    */}
    <Mega qtdeNumeros={12} />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
