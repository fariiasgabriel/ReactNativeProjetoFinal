import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RotasApp } from '../../../App';
import styles from './styles';

type Props = NativeStackScreenProps<RotasApp, 'previsao'>;

export default function Previsao({ route }: Props) {
  // Recebe os dados da Home
  const { dias } = route.params;

  return (
    <FlatList
      data={dias}
      keyExtractor={(item) => item.date}
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
