import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './src/navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
}

export default App;
