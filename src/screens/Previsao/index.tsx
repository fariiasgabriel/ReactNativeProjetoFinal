import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../routes/AppRouter';
import styles from './styles';

type Props = BottomTabScreenProps<RootTabParamList, 'Previsao'>;

export default function Previsao({ route }: Props) {
  const dias = route.params?.dias || [];
  const cidade = route.params?.cidade || ""; 

  if (dias.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhuma previsão disponível.</Text>
        <Text>Faça uma busca na tela inicial.</Text>
      </View>
    );
  }

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.tituloCidade}>{cidade.toUpperCase()}</Text>

      <FlatList
        data={dias}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dia}>
               {item.weekday} - {item.date}
            </Text>
            
            <Text>{item.min}°C / {item.max}°C</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: 50, 
    paddingHorizontal: 20,
  },
  tituloCidade: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF', 
    textAlign: 'center',
    marginBottom: 20, 
  }
});