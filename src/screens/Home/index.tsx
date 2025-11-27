import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/AppRouter';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();
  
  const [clima, setClima] = useState<any>(null);
  const CHAVE_API = "32a0fc0c";
  const cidade = "Rio de Janeiro";

  useEffect(() => {
    fetch(`https://api.hgbrasil.com/weather?key=${CHAVE_API}&city_name=${cidade}`)
      .then(res => res.json())
      .then(data => setClima(data.results))
      .catch(err => console.error(err));
  }, []);

  if (!clima) return <ActivityIndicator size="large" color="#0077B6" />;

  return (
    <View style={styles.container}>
      <Text style={styles.cidade}>{clima.city}</Text>
      <Text style={styles.temperatura}>{clima.temp}°C</Text>
      <Text style={styles.condicao}>{clima.description}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Previsao', { dias: clima.forecast })}>
        <Text style={styles.link}>Ver previsão</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favorito')}>
        <Text style={styles.link}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}