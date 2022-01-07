import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ClipboardScreen, { multiply } from 'rn-super-home-module';

export default function App() {
  const [teste, setTeste] = React.useState(true);
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  if (teste) return <ClipboardScreen />;

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
