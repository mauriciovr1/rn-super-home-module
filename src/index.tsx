import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClipboardExample from './screens/clipboard-example';

const Routes = createNativeStackNavigator();

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export default function ExampleModule() {
  return (
    <Routes.Navigator>
      <Routes.Screen name="clipboard" component={ClipboardExample} />
    </Routes.Navigator>
  );
}
