import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/AppRouter';
import styles from './styles';

type Props = BottomTabScreenProps<RootTabParamList, 'Previsao'>;

export default function Previsao({ route }: Props) {
  const dias = route.params?.dias || [];

  if (dias.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhuma previsão disponível no momento.</Text>
        <Text>Faça uma busca na tela inicial.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={dias}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.dia}>{item.weekday}</Text>
          <Text>{item.min}°C / {item.max}°C</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
}