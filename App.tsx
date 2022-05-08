/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {observer} from 'mobx-react-lite';
import React, {useMemo} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {KeystoneProvider, useKeystoneStore} from './src/stores/keystone';

const Main = observer(() => {
  const store = useKeystoneStore();
  const systemColorScheme = useColorScheme();

  const backgroundStyle = useMemo(() => {
    const colorScheme = store.currentColorScheme;
    if (colorScheme === 'auto') {
      if (systemColorScheme === 'light') {
        return styles.backgroundLight;
      }
      return styles.backgroundDark;
    }
    if (colorScheme === 'light') {
      return styles.backgroundLight;
    }
    return styles.backgroundDark;
  }, [store.currentColorScheme, systemColorScheme]);

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <Text>Current color scheme: {store.currentColorScheme}</Text>
      <Button
        title="Set color scheme to light"
        onPress={() => store.setUserColorScheme('light')}
      />
      <Button
        title="Set color scheme to dark"
        onPress={() => store.setUserColorScheme('dark')}
      />
      <Button
        title="Set color scheme to auto"
        onPress={() => store.setUserColorScheme('auto')}
      />
    </SafeAreaView>
  );
});

const App = () => {
  return (
    <KeystoneProvider>
      <Main />
    </KeystoneProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backgroundLight: {
    backgroundColor: '#ccc',
  },
  backgroundDark: {
    backgroundColor: '#222',
  },
});

export default App;
