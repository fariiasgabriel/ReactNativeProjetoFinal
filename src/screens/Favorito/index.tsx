import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function Favorito() {
  const [cidade, setCidade] = useState('');
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const data = await AsyncStorage.getItem('favoritos');
        if (data) {
          setFavoritos(JSON.parse(data));
        }
      } catch (err) {
        Alert.alert('Erro', 'Não foi possível carregar seus favoritos.');
      }
    };

    carregarFavoritos();
  }, []);

  const salvarCidade = async () => {
    const cidadeTrim = cidade.trim();
    if (!cidadeTrim) {
      Alert.alert('Atenção', 'Digite uma cidade válida.');
      return;
    }
    if (favoritos.includes(cidadeTrim)) {
      Alert.alert('Atenção', 'Essa cidade já está nos favoritos.');
      return;
    }

    try {
      const novosFavoritos = [...favoritos, cidadeTrim];
      setFavoritos(novosFavoritos);
      await AsyncStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
      setCidade('');
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível salvar a cidade.');
    }
  };

  const removerCidade = async (nome: string) => {
    try {
      const atualizados = favoritos.filter(c => c !== nome);
      setFavoritos(atualizados);
      await AsyncStorage.setItem('favoritos', JSON.stringify(atualizados));
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível remover a cidade.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cidades Favoritas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarCidade}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <FlatList
        data={favoritos}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => removerCidade(item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.item}>Nenhuma cidade favorita ainda.</Text>}
      />
    </View>
  );
}
