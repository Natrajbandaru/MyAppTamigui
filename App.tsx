import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { TamaguiProvider, Text, styled } from 'tamagui';

import config from './tamagui.config';

const MyView = styled(View, {
  name: 'MyView',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <MyView>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </MyView>
    </TamaguiProvider>
  );
}
