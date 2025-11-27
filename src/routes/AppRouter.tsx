import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home/";
import Sobre from "../screens/Sobre/Sobre"; 
import Login from "../screens/Login/Login";
import Cadastro from "../screens/Cadastro/Cadastro";
import Previsao from "../screens/Previsao/index";
import Favorito from "../screens/Favorito/index"; 

import { AuthContext } from '../context/AuthContext';

export type RootTabParamList = {
    Home: undefined;
    Sobre: undefined;
    Login: undefined;
    Cadastro: undefined;
    Previsao: { dias: any[] }; 
    Favorito: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppRouter() {
  const { token } = useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <>
          <Tab.Screen name="Login" component={Login} />
<<<<<<< HEAD
          <Tab.Screen name="Cadastro" component={Cadastro} />
=======
          <Tab.Screen name="Cadastro" component={Cadastro} options={{tabBarItemStyle:{display: 'none'}}}/>
>>>>>>> origin/main
        </>
      ) : (
        <>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Sobre" component={Sobre} />
          
          <Tab.Screen name="Previsao" component={Previsao} />
          <Tab.Screen name="Favorito" component={Favorito} />
        </>
      )}
    </Tab.Navigator>
  );
}