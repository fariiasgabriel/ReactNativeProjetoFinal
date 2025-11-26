import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RotasApp } from '../../../App';
import styles from './styles';

// Tipagem para navegação 
type Props = NativeStackScreenProps<RotasApp, 'login'>;

export default function Login({ navigation }: Props) {
  // armazena usuário e senha 
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Usuário e senha fixos
  const usuarioFixo = "admin";
  const senhaFixa = "123";
  
  const entrar = () => {
    // Verifica usuário e senha 
    if (usuario === usuarioFixo && senha === senhaFixa) {
      // Se estiver correto vai para a Home
      navigation.navigate('home');
    } else {
      // Se não dá erro
      Alert.alert("Erro", "Usuário ou senha inválidos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Verifique se vai dar praia!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/*  login */}
      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
