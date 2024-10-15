import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native';


import data from './Data';
import Square from './Square';
import styles from "./style";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [number, setNumber] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={{color:"black", marginTop: 50,}}>{number}</Text>
      <Button title="Increment" onPress={() => setNumber(number + 1)} />
    
    {/* question4 */}
      {data.map((item, index) =>(
        <Square key={item} text = {`Square ${index + 1}`} />
      ))}

    </ScrollView>
  );
}
