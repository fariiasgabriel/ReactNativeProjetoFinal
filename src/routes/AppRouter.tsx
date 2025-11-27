import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
    Previsao: { dias: any[]; cidade: string }; 
    Favorito: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppRouter() {
  const { token } = useContext(AuthContext);

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Previsao') {
            iconName = focused ? 'cloud' : 'cloud-outline';
          } else if (route.name === 'Favorito') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else {
            iconName = 'alert-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {!token ? (
        <>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ tabBarItemStyle: { display: 'none' } }}
          />
        </>
      ) : (
        <>
          <Tab.Screen name="Home" component={Home} />        
          <Tab.Screen name="Previsao" component={Previsao} />
          <Tab.Screen name="Favorito" component={Favorito} />
          <Tab.Screen name="Sobre" component={Sobre} />
        </>
      )}
    </Tab.Navigator>
  );
}