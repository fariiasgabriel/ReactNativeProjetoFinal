import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/AppRouter';

import styles from './styles';

export default function Sobre() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o nosso App</Text>

      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido para mostrar informações de clima em tempo real,
        permitindo que você consulte a temperatura, condição atual e previsão dos próximos dias!
      </Text>

      <Text style={styles.texto}>
        Você pode buscar o clima de qualquer cidade digitando o nome dela na página inicial,
        salvar suas favoritas e acessar rapidamente quando quiser.
      </Text>

      <Text style={styles.texto}>
        Tecnologias usadas: React Native, TypeScript e API de Clima HG Brasil.
      </Text>

      // Participantes do Grupo
      <Text style={styles.subtitulo}>Desenvolvedores do Grupo:</Text>
      <Text style={styles.dev}>Irene</Text>
      <Text style={styles.dev}>Pâmela</Text>
      <Text style={styles.dev}>Gabriel</Text>
      <Text style={styles.dev}>Marcos</Text>
      <Text style={styles.dev}>Matheus</Text>
      <Text style={styles.dev}>Fernanda</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}