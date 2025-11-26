import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas criadas
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Previsao from './src/screens/Previsao';
import Favorito from './src/screens/Favorito';

// Tipagem das rotas evita erros de navegação
export type RotasApp = {
  login: undefined;
  home: undefined; 
  previsao: { dias: any[] }; //recebe lista de dias como parâmetro
  favorito: undefined; 
};

// controlador das rotas
const Navegador = createNativeStackNavigator<RotasApp>();

export default function App() {
  return (
    <NavigationContainer>
      <Navegador.Navigator initialRouteName="login">
        <Navegador.Screen name="login" component={Login} />
        <Navegador.Screen name="home" component={Home} />
        <Navegador.Screen name="previsao" component={Previsao} />
        <Navegador.Screen name="favorito" component={Favorito} />
      </Navegador.Navigator>
    </NavigationContainer>
  );
}
