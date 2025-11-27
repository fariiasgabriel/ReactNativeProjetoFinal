import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, TextInput, ImageBackground, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/AppRouter';

import styles from './styles';

import { wallpapers, defaultWallpaper } from '../../../wallpapers'; 

export default function Home() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();
  
  const [cidade, setCidade] = useState("Rio de Janeiro");
  const [buscar, setBuscar] = useState(false);
  const [clima, setClima] = useState<any>(null);
  
  const CHAVE_API = "1587a767"; 

  useEffect(() => {
    if (buscar || !clima) {
      fetch(`https://api.hgbrasil.com/weather?key=${CHAVE_API}&city_name=${encodeURIComponent(cidade)}`)
        .then(res => res.json())
        .then(data => {
          setClima(data.results);
          setBuscar(false);
          Keyboard.dismiss(); 
        })
        .catch(err => {
          console.error(err);
          setBuscar(false);
        });
    }
  }, [buscar]);

  const getEmoji = (descricao: string) => {
    if (!descricao) return "❓";
    const desc = descricao.toLowerCase();
    if (desc.includes("sol") || desc.includes("limpo")) return "☀️";
    if (desc.includes("nublado")) return "☁️";
    if (desc.includes("chuva")) return "🌧️";
    if (desc.includes("tempestade")) return "⛈️";
    if (desc.includes("neve")) return "❄️";
    return "🌡️";
  };

  if (!clima) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077B6" />
      </View>
    );
  }

  const wallpaper = wallpapers[clima.description] ?? defaultWallpaper;

  return (
    <ImageBackground source={wallpaper} style={{ flex: 1 }} resizeMode="cover">
      <View style={styles.overlay}>
        
        <TextInput
          style={styles.input}
          placeholder="Digite a cidade"
          placeholderTextColor="#ccc"
          value={cidade}
          onChangeText={setCidade}
        />

        <TouchableOpacity onPress={() => setBuscar(true)}>
          <Text style={styles.link}>Buscar clima</Text>
        </TouchableOpacity>

        <Text style={styles.cidade}>{clima.city}</Text>
        <Text style={styles.temperatura}>{clima.temp}°C</Text>
        
        <Text style={styles.emojiclima}>{getEmoji(clima.description)}</Text>
        
        <Text style={styles.condicao}>{clima.description}</Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Previsao', { 
            dias: clima.forecast, 
            cidade: clima.city 
          })}
        >
          <Text style={styles.link}>Ver previsão</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favorito')}>
          <Text style={styles.link}>Favoritos</Text>
        </TouchableOpacity>
      
      </View>
    </ImageBackground>
  );
}