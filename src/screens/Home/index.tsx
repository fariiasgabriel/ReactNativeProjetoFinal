import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RotasApp } from '../../../App';
import styles from './styles';

// tipagem para navegação
type Props = NativeStackScreenProps<RotasApp, 'home'>;

export default function Home({ navigation }: Props) {
  // armazenar dados do clima
  const [clima, setClima] = useState<any>(null);

  // Chave da API e cidade padrão coloquei o RJ
  const CHAVE_API = "32a0fc0c";
  const cidade = "Rio de Janeiro";

  // Faz a requisição na API 
  useEffect(() => {
    fetch(`https://api.hgbrasil.com/weather?key=${CHAVE_API}&city_name=${cidade}`)
      .then(res => res.json())
      .then(data => setClima(data.results))
      .catch(err => console.error(err));
  }, []);

  // Enquanto não carrega mostra um indicador
  if (!clima) return <ActivityIndicator size="large" color="#0077B6" />;

  return (
    <View style={styles.container}>
      {/* Dados principais do clima */}
      <Text style={styles.cidade}>{clima.city}</Text>
      <Text style={styles.temperatura}>{clima.temp}°C</Text>
      <Text style={styles.condicao}>{clima.description}</Text>

      {/* Botão para a pagin previsão */}
      <TouchableOpacity onPress={() => navigation.navigate('previsao', { dias: clima.forecast })}>
        <Text style={styles.link}>Ver previsão</Text>
      </TouchableOpacity>

      {/* Botão para    favoritos */}
      <TouchableOpacity onPress={() => navigation.navigate('favorito')}>
        <Text style={styles.link}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
