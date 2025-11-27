import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/context/AuthContext';

import AppRouter from './src/routes/AppRouter';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </NavigationContainer>
  );
}