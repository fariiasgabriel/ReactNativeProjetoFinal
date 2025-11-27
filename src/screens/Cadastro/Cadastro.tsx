import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/apiAutenticacao";
import { styles } from "./styles";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../../routes/AppRouter';
import axios from "axios"; 

export default function Cadastro() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      console.log("--- INÍCIO DO CADASTRO ---");
      console.log("Dados sendo enviados:", { nome, email, senha });

      const resposta = await api.post("/cadastro", { nome, email, senha });
      
      console.log("Sucesso! Resposta do servidor:", resposta.data);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login"); 

    } catch (erro) {
      console.log("--- ERRO ENCONTRADO ---");
      
      if (axios.isAxiosError(erro)) {
        console.error("Erro Axios:", erro.message);
        
        if (erro.response) {
          console.error("Status do erro:", erro.response.status);
          console.error("Dados do erro (Backend):", erro.response.data);
          
          const mensagemDoBackend = erro.response.data?.message || erro.response.data?.erro || JSON.stringify(erro.response.data);
          Alert.alert("Erro no Cadastro", `O servidor respondeu: ${mensagemDoBackend}`);
        } else if (erro.request) {
          console.error("Sem resposta do servidor. Verifique o IP e se o backend está rodando.");
          Alert.alert("Erro de Conexão", "Não foi possível conectar ao servidor. Verifique o IP e sua internet.");
        }
      } else {
        console.error("Erro desconhecido:", erro);
        Alert.alert("Erro", "Ocorreu um erro inesperado.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaInput}>
        <TextInput 
          placeholder="Seu nome" 
          style={styles.input} 
          value={nome} 
          onChangeText={setNome} 
        />
      </View>
      <View style={styles.areaInput}>
        <TextInput 
          placeholder="Seu email" 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none" 
          keyboardType="email-address" 
        />
      </View>
      <View style={styles.areaInput}>
        <TextInput 
          placeholder="Sua senha" 
          style={styles.input} 
          value={senha} 
          onChangeText={setSenha} 
          secureTextEntry 
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}