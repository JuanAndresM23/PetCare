// Dependencias externas
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navegación
import AppNavigator from './src/navigation/AppNavigator';

// Componente raíz de la aplicación
const App = () => {
  return (
    // Proveedor de área segura para todos los componentes hijos
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;