import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({//hook/função para carregar as fontes
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  // CHECANDO SE AS FONTES CARREGARAM
  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' translucent />
      <Dashboard />
    </ThemeProvider>
  );
}
