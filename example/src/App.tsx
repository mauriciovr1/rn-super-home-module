import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ClipboardScreen, { multiply } from '../../src';

export default function App() {
  const [teste] = React.useState(true);
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  console.log('i am here 2');

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
