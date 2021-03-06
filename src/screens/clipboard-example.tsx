import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { useNavigation } from '@react-navigation/native';

const ClipboardExample = () => {
  const TEXT_EXAMPLE = 'Este é um texto exemplo para o Clipboard';
  const [buttonLabel, setButtonLabel] = useState('COPIAR');

  const { navigate } = useNavigation();

  const copyTextToClipboard = () => {
    setButtonLabel('COPIADO');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.exampleText}>{TEXT_EXAMPLE}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => copyTextToClipboard()}
      >
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => EventRegister.emit('NativeOutsideModule', 'Screen1')}
      >
        <Text style={styles.buttonLabel}>
          Navigate to home with eventListener
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        // @ts-ignore
        onPress={() => navigate('Home')}
      >
        <Text style={styles.buttonLabel}>
          Navigate to home with navigate object
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  exampleText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: 10,
    height: 45,
  },
  buttonLabel: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ClipboardExample;
