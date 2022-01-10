import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClipboardExample from './screens/clipboard-example';

const Routes = createNativeStackNavigator();

export default function ExampleModule() {
  return (
    <Routes.Navigator initialRouteName="Clipboard">
      <Routes.Screen name="Clipboard" component={ClipboardExample} />
    </Routes.Navigator>
  );
}
